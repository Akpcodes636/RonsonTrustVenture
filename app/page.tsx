"use client";
import Footer from "./components/footer";
import About from "./components/home/About";
import FeaturedProducts from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";
import Testimonial from "./components/home/Testimonial";
import WhyChooseUs from "./components/home/WhyChooseUs";


export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <Hero />
    <FeaturedProducts />
    <WhyChooseUs />
    <About />
    <Testimonial />
    <Footer />
    </>
  );
}
