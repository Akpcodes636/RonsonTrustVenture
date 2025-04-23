"use client";
import Footer from "../components/footer";
import ProductCatalogue from "../components/Products/ProductCatalgoue";
import ProductHero from "../components/Products/ProductHero";
import ProductInfo from "../components/Products/ProductInfo";

export default function Product() {
  return (
    <>
    <ProductHero />
    <ProductCatalogue />
    <ProductInfo />
    <Footer />
    </>
  )
}
