"use client";
import Footer from "./components/footer";
import About from "./components/Home/About";
import FeaturedProducts from "./components/Home/FeaturedProduct";
import Hero from "./components/Home/Hero";
import Testimonial from "./components/Home/Testimonial";
import WhyChooseUs from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="hide-scroll">
      {/* <Header /> */}
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}
