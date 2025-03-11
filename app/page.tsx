"use client";
import About from "./components/home/About";
import Hero from "./components/home/Hero";
import Why from "./components/home/Why";
import Statistics from "./components/home/Stat";
import Footer from "./components/footer";
import Service from "./components/home/Service";
import Testimonial from "./components/home/Testimonial";

export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <Hero />
    <About />
    <Why />
    <Statistics />
    <Service />
    <Testimonial />
    <Footer />
    </>
  );
}
