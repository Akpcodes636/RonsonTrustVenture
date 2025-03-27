"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/Form";

export default function Contact() {
  return (
    <>
      <Header />
        <ContactHero />
        <ContactForm />
      <Footer />
    </>
  );
}
