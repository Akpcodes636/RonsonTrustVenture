"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/Form";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="relative">
        <ContactHero />
        <ContactForm className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl z-10" />
      </div>
      <Footer />
    </>
  );
}
