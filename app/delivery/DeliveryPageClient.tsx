"use client";
import { useEffect, useState } from "react";
import Form from "../components/Delivery/Forms";
import ConfirmOrder from "../components/Delivery/Order";
import ThankYou from "../components/Delivery/Thankyou";
import ProductHero from "../components/Products/ProductHero";
import BookingProgress from "../components/ui/ProgressBar";
import Footer from "../components/footer";
import Payment from "../components/Delivery/Payment";

const STORAGE_KEY = "delivery_step";

export default function DeliveryPageClient({ slug }: { slug: string | null }) {
  void slug;
  const [step, setStep] = useState<number>(0);

  const [customerInfo, setCustomerInfo] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);

  useEffect(() => {
    const savedStep = sessionStorage.getItem(STORAGE_KEY);
    setStep(savedStep ? Number(savedStep) : 0);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, step.toString());
  }, [step]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(STORAGE_KEY);
    };
  }, []);

  const displaySteps = () => {
    switch (step) {
      case 1:
        return (
          <Form
            setStep={setStep}
            setCustomerInfo={(info) =>
              setCustomerInfo({
                name: info.fullName,
                email: info.email,
                phone: info.phoneNumber,
              })
            }
          />
        );
      case 2:
        return (
          <Payment
            setStep={setStep}
            reference={customerInfo?.name || "default-reference"}
            email={customerInfo?.email || "default-email@example.com"}
            amount={1000} // Replace with the actual amount
            fullName={customerInfo?.name || "Default Name"}
          />
        );
      case 3:
        return <ConfirmOrder setStep={setStep} />;
      case 4:
        return <ThankYou />;
      default:
        return (
          <Form
            setStep={setStep}
            setCustomerInfo={(info) =>
              setCustomerInfo({
                name: info.fullName,
                email: info.email,
                phone: info.phoneNumber,
              })
            }
          />
        );
    }
  };

  return (
    <>
      <ProductHero />
      <BookingProgress step={step} setStep={setStep} />
      {displaySteps()}
      <Footer />
    </>
  );
}
