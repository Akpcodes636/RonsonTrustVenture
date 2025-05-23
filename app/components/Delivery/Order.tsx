"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Button from "../ui/Button";
import useSanityProduct from "@/app/hooks/useSanityOrder";

interface ConfirmOrderProps {
  setStep: (step: number) => void;
}

interface DeliveryInfo {
  fullName?: string;
  phoneNumber?: string;
  address?: string;
}

export default function ConfirmOrder({ setStep }: ConfirmOrderProps) {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const { product } = useSanityProduct(slug as string);
  // const orderId = searchParams.get("orderId");
  const orderId = sessionStorage.getItem("orderId");

  // const [orderId, setOrderId] = useState<string | null>(null);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(null);

  // {"_id":{"$oid":"6810827ee1d1304a08808edc"},"fullName":"Ewherhe Akpesiri","email":"ewherheakpesiri@gmail.com","address":"32 osivemenu street Agbarho","phoneNumber":"08169699200","alternativePhoneNumber":"","state":"Warri","city":"warri","createdAt":{"$date":{"$numberLong":"1745912446495"}},"updatedAt":{"$date":{"$numberLong":"1745912446495"}},"__v":{"$numberInt":"0"}}
  useEffect(() => {
    if (!orderId) return;

    if (!orderId) return; // guard clause

    const fetchDeliveryInfo = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`); // ← FIXED here
        if (!response.ok) {
          throw new Error("Failed to fetch delivery info");
        }
        const data = await response.json();
        console.log(data);
        setDeliveryInfo({
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          address: data.address,
        });
      } catch (error) {
        console.error("Error fetching delivery info:", error);
      }
    };

    fetchDeliveryInfo();
  }, [orderId]);

  return (
    <div className="pt-16 md:pt-24 lg:pt-[120px] pb-20 md:pb-32 lg:pb-[200px] px-4 md:px-6">
      {/* Header */}
      <div className="flex items-center gap-3 justify-center mb-6">
        <Image
          src="/image/checkmark.svg"
          width={32}
          height={32}
          alt="checkmark icon"
        />
        <h1 className="font-semibold text-lg text-[#4A4A4A]">Confirm Order</h1>
      </div>

      <div className="space-y-8 mb-10">
        {/* Order Summary */}
        <div className="w-full max-w-xl mx-auto border rounded">
          <div className="p-6">
            <h2 className="font-semibold text-lg text-[#4A4A4A] mb-4 border-b pb-4">
              Order Summary
            </h2>
            <p className="text-[#4A4A4A] mb-2">{product?.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-[#4A4A4A]">
                Qty.1 <span>${product?.price}</span>
              </p>
              <p
                className="text-[#B81A14] font-medium cursor-pointer"
                onClick={() => setStep(1)} // Step 1 is your form to edit product/order details
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="w-full max-w-xl mx-auto border rounded">
          <div className="p-6">
            <h2 className="font-semibold text-lg text-[#4A4A4A] mb-4 border-b pb-4">
              Delivery Information
            </h2>
            <p className="text-[#4A4A4A]">
              {deliveryInfo?.fullName || "Full name not available"}
            </p>
            <p className="text-[#4A4A4A] mb-2">
              {deliveryInfo?.phoneNumber || "Phone number not available"}
            </p>
            <div className="flex justify-between">
              <p className="text-[#4A4A4A]">
                {deliveryInfo?.address || "Address not available"}
              </p>
              <p
                className="text-[#B81A14] font-medium cursor-pointer"
                onClick={() => setStep(1)} // Also probably the same form step where delivery info is edited
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="w-full max-w-xl mx-auto border rounded">
          <div className="p-6">
            <h2 className="font-semibold text-lg text-[#4A4A4A] mb-4 border-b pb-4">
              Payment Method
            </h2>
            <p className="text-[#4A4A4A] mb-2">*******1234</p>
            <div className="flex justify-between items-center">
              <p className="text-[#4A4A4A]">07/28</p>
              <p
                className="text-[#B81A14] font-medium cursor-pointer"
                onClick={() => setStep(2)} // Step 2 is your payment step
              >
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="flex items-center justify-center">
        <Button
          style="primary"
          type="submit"
          css="w-[182px] h-[48px] rounded-[5px]"
          fn={() => setStep(4)}
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
}
