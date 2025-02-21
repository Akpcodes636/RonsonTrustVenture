"use client";
import Header from "./components/header";
import About from "./components/home/About";
import Hero from "./components/home/Hero";
import Why from "./components/home/Why";
// import Service from "./components/home/Service"
import Statistics from "./components/home/Stat";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Why />
    <Statistics />
    {/* <Service /> */}
    <Footer />
    </>
  );
}
