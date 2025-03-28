import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/Form";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
      <Header />
      {/* Contact Section */}
      <div className="relative">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Form Section with Extra Space */}
        <div className="relative min-h-[100vh] lg:min-h-[70vh] flex items-center justify-center">
          <div className="absolute w-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
