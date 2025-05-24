// app/delivery/DeliveryPageClient.tsx
"use client";
import { useEffect, useState } from "react";
import Form from "../components/Delivery/Forms";
import Payment from "../components/Delivery/Payment";
import ConfirmOrder from "../components/Delivery/Order";
import ThankYou from "../components/Delivery/Thankyou";
import ProductHero from "../components/Products/ProductHero";
import BookingProgress from "../components/ui/ProgressBar";
import Footer from "../components/footer";


const STORAGE_KEY = "delivery_step";

export default function DeliveryPageClient() {
  const [step, setStep] = useState<number>(0);

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
        return <Form setStep={setStep} />;
      case 2:
        return <Payment setStep={setStep} />;
      case 3:
        return <ConfirmOrder setStep={setStep} />;
      case 4:
        return <ThankYou />;
      default:
        return <Form setStep={setStep} />;
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
