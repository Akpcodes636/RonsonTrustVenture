// "use client";
import Footer from "../components/footer";
import ProductCatalogue from "../components/Products/ProductCatalgoue";
import ProductHero from "../components/Products/ProductHero";
import ProductInfo from "../components/Products/ProductInfo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Built for Performance',
  description: 'Explore our range of high-performance products designed to meet your needs. Quality and reliability guaranteed.',
  keywords: [
    "Products",
    "High-performance products",
    "Quality products",
    "Reliable products",
    "Product catalogue",
    "Performance-driven products",
    "Durable products",
    "Innovative products",
    "Top-rated products",
    "Affordable products"
  ],
}

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
