"use client";
import AboutUsHero from "../components/About/AboutUsHero";
import History from "../components/About/History";
import OurValues from "../components/About/OurValues ";
import ShowcaseBanner from "../components/About/ShowcaseBanner";

import Footer from "../components/footer";
import Header from "../components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutUsHero />
      <OurValues />
      <ShowcaseBanner />
      <History  />
      <Footer />
    </>
  );
}
