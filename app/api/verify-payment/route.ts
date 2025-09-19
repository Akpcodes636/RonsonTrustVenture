// app/api/verify-payment/route.ts
import { NextResponse } from 'next/server';
import { markProductAsSold } from "@/app/lib/sanity";



export async function POST(request: Request) {
  try {
    const { reference, productId } = await request.json();
    
    if (!reference || productId) {
      return NextResponse.json(
        { error: 'Payment reference is required' },
        { status: 400 }
      );
    }

    // Verify payment with Paystack
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to verify payment' },
        { status: 400 }
      );
    }

    if (data.status && data.data.status === 'success') {
      await markProductAsSold(productId); // Replace 'any' with actual productId if available
      // Payment is successful
      const paymentData = {
        reference: data.data.reference,
        amount: data.data.amount,
        currency: data.data.currency,
        status: data.data.status,
        customer: data.data.customer,
        metadata: data.data.metadata,
        paid_at: data.data.paid_at,
      };

      // Here you can save the order to Sanity or your database
      // await saveOrderToSanity(paymentData);

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        data: paymentData,
      });
    } else {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}