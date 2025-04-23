"use client";
import Form from "../components/Delivery/Forms";
import Footer from "../components/footer";
import ProductHero from "../components/Products/ProductHero";
import BookingProgress from "../components/ui/ProgressBar";

export default function Page(){
    return (
        <>
        <ProductHero />
        <BookingProgress />
        <Form />
        <Footer />
        </>
    );
};