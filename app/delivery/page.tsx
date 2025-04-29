"use client";
import Form from "../components/Delivery/Forms";
import ConfirmOrder from "../components/Delivery/Order";
import Payment from "../components/Delivery/Payment";
import ThankYou from "../components/Delivery/Thankyou";
import Footer from "../components/footer";
import ProductHero from "../components/Products/ProductHero";
import BookingProgress from "../components/ui/ProgressBar";
import { useStep } from "../zustand/store";


export default function Page() {
  const { step } = useStep();

  const displaySteps = () => {
    switch (step){
        case 1:
            return <Form />;
        case 2:
            return <Payment />;
        case 3:
            return <ConfirmOrder />;
        case 4:
            return <ThankYou />;
        default:
            return <Form />;
    }
  }
  


  return (
    <>
      <ProductHero />
      <BookingProgress />
      {displaySteps()}
      {/* <ConfirmOrder /> */}
      <Footer />
    </>
  );
}
