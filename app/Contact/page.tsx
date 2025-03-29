import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/Form";
import Header from "../components/header";
import Footer from "../components/footer";
import Icon from "../components/ui/Icon";

export default function Contact() {
  return (
    <div>
      <Header />
      {/* Contact Section */}
      <div className="relative">
        {/* Hero Section */}
        <ContactHero />
        <Icon
          image="/image/Vector-1.svg"
          direction="left"
          className="right-0 top-[65%] block lg:hidden"
        />
        {/* Contact Form Section with proper spacing */}
        <div className="-mt-52 xl:-mt-40 px-4 py-16 relative">
        <Icon
          image="/image/Vector-1.svg"
          direction="left"
          className="right-0 top-44 hidden lg:block xl:block"
        />
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
