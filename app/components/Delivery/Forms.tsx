"use client";
import Image from "next/image";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

// 1. Create Zod schema
const OrderSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  alternativePhoneNumber: z.string().optional(),
  state: z.string().min(2, "State is required"),
  city: z.string().min(2, "City is required"),
});

type OrderForm = z.infer<typeof OrderSchema>;

interface FormProps {
  setStep: (step: number) => void;
}

export default function Form({ setStep }: FormProps) {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  console.log("Slug from URL:", slug);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderForm>({
    resolver: zodResolver(OrderSchema),
  });

  const onSubmit = async (data: OrderForm) => {
    console.log("Submitting values:", data);
    setLoading(true);
  
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log(response);
  
      if (response.ok) {
        console.log("Order saved successfully:", result.message);
  
        const orderId = result.orderId;
        sessionStorage.setItem("orderId", orderId); // Optional if you want to reuse it later
  
        // Update the URL without reloading the page
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("orderId", orderId);
        window.history.pushState({}, "", currentUrl);
  
        setStep(2); // Proceed to the Payment step
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
            width={500}
            height={500}
            alt="icon"
            className="object-contain w-[32px] h-[32px]"
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

              <div className="flex-1 hidden lg:block">
                <InputField
                  label="Alternative Phone Number"
                  {...register("alternativePhoneNumber")}
                  error={errors.alternativePhoneNumber?.message}
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

            <div className="flex items-center justify-center">
              <Button
                style="primary"
                type="submit"
                disabled={isSubmitting}
                css="w-[182px] h-[48px] rounded-[5px]"
                loading={loading || isSubmitting}
                // fn={()=> setStep(2)}
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
