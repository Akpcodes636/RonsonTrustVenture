"use client";
import Image from "next/image";
import InputField from "../ui/InputField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PaystackButton } from "react-paystack";

const OrderSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .min(1, "Amount is required"),
  state: z.string().min(2, "State is required"),
  city: z.string().min(2, "City is required"),
});

type OrderForm = z.infer<typeof OrderSchema>;

interface FormProps {
  setStep: (step: number) => void;
  setCustomerInfo: (info: OrderForm) => void;
}

export default function Form({ setStep, setCustomerInfo }: FormProps) {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState<{
    email: string;
    amount: number;
    name: string;
  } | null>(null);

  const publicKey = "pk_test_b750c29e9f96a829b20f230c4d5c996964972858";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderForm>({
    resolver: zodResolver(OrderSchema),
  });

  const onSubmit = async (data: OrderForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        const orderId = result.orderId;
        sessionStorage.setItem("orderId", orderId);

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("orderId", orderId);
        window.history.pushState({}, "", currentUrl);

        setCustomerInfo(data);
        setPaymentData({
          email: data.email,
          amount: Number(data.amount) * 100,
          name: data.fullName,
        });
      } else {
        console.error("Server error:", result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-sm mx-auto pt-[120px] pb-[200px]">
      <div className="flex items-center gap-[18px] justify-center mb-[32px]">
        <span>
          <Image
            src="/image/truck.svg"
            width={32}
            height={32}
            alt="icon"
            className="object-contain"
          />
        </span>
        <h1 className="font-semibold text-[24px] text-[#4A4A4A]">
          Delivery Address
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-[358px] lg:min-w-[711px] bg-[#F4F4F4] rounded-[5px]">
          <div className="py-[32px] px-[18px] lg:p-[52px] flex flex-col gap-4">
            <InputField
              label="Name"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
            <InputField
              label="Email"
              {...register("email")}
              error={errors.email?.message}
            />
            <InputField
              label="Address"
              {...register("address")}
              error={errors.address?.message}
            />
            <div className="flex gap-[30px]">
              <div className="flex-1">
                <InputField
                  label="Phone Number"
                  {...register("phoneNumber")}
                  error={errors.phoneNumber?.message}
                />
              </div>
              <div className="flex-1">
                <InputField
                  label="Amount"
                  type="number"
                  {...register("amount", { valueAsNumber: true })}
                  error={errors.amount?.message}
                />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex-1">
                <InputField
                  label="State"
                  {...register("state")}
                  error={errors.state?.message}
                />
              </div>
              <div className="flex-1">
                <InputField
                  label="City"
                  {...register("city")}
                  error={errors.city?.message}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              {paymentData ? (
                <PaystackButton
                  email={paymentData.email}
                  amount={paymentData.amount}
                  publicKey={publicKey}
                  text="Pay Now"
                  onSuccess={() => {
                    console.log("✅ Payment successful");
                    setStep(3);
                  }}
                  onClose={() => console.log("Payment popup closed")}
                  className="bg-green-600 text-white px-6 py-2 rounded-[5px]"
                />
              ) : (
                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className="bg-[#B81A14] text-white w-[182px] h-[48px] rounded-[5px] disabled:opacity-60"
                >
                  {loading || isSubmitting
                    ? "Submitting..."
                    : "Proceed to Payment"}
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
