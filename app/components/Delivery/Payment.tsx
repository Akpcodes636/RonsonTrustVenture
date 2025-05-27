"use client";
import { useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";

interface PaystackResponse {
  reference: string;
  // add more properties if needed
}

interface PaystackPop {
  setup: (options: {
    key: string;
    email: string;
    amount: number;
    currency: string;
    ref: string;
    callback: (response: PaystackResponse) => void | Promise<void>;
    onClose?: () => void;
  }) => {
    openIframe: () => void;
  };
}

// Extend the Window interface for PaystackPop
declare global {
  interface Window {
    PaystackPop?: PaystackPop;
  }
}

interface PaystackProps {
  reference: string;
  email: string;
  amount: number; // in kobo
  fullName: string;
  setStep: (step: number) => void;
}

export default function Payment({
  reference,
  email,
  amount,
  fullName,
  setStep,
}: PaystackProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payWithPaystack = () => {
    if (!window.PaystackPop) {
      alert("Paystack is not loaded yet. Please try again in a moment.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_b750c29e9f96a829b20f230c4d5c996964972858",
      email,
      amount,
      currency: "NGN",
      ref: reference,

      callback: async (response: PaystackResponse) => {
        alert("Payment Successful! Ref: " + response.reference);

        try {
          const res = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: response.reference }),
          });

          const result = await res.json();
          if (result.success) {
            alert("Payment Verified on Backend!");
            setStep(3);
          } else {
            alert("Payment Verification Failed.");
          }
        } catch (err) {
          console.error("Verification Error:", err);
          alert("Could not verify payment. Try again later.");
        }
      },

      onClose: () => {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="pt-[120px] pb-[200px]">
      <div className="flex items-center gap-[18px] justify-center mb-[32px]">
        <Image
          src="/image/Payment.svg"
          width={32}
          height={32}
          alt="icon"
          className="object-contain"
        />
        <h1 className="font-semibold text-[24px] text-[#4A4A4A]">
          Payment Details
        </h1>
      </div>
      <div className="mx-auto max-w-[358px] lg:min-w-[711px] h-[536px] bg-[#F4F4F4] rounded-[5px]">
        <div className="p-[52px]">
          <h1>Hello, {fullName}</h1>
          <Button
            style="primary"
            css="w-[182px] h-[48px] rounded-[5px]"
            type="button"
            fn={payWithPaystack}
          >
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  );
}
