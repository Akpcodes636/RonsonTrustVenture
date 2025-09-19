"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import ProductInfo from "@/app/components/Products/ProductInfo";
import GoBack from "@/app/components/ui/GoBack";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import type { Product } from "../../types";
import OrderButton from "@/app/components/ui/OrderButton";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
//   const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // simulate a short loading delay
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);
//   console.log(product);
  return (
    <section>
      {/* Hero Section */}
      <div className="lg:background mobile-bg min-h-[300px]">
        <Header />
        <div className="pt-[176px] lg:pt-[247px] pb-[52px] container-sm mx-auto text-white text-center">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            <span className="text-[#DE9693]">Our Products – </span>
            Built for Performance
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-sm mx-auto py-12 lg:py-[120px] px-4">
        <GoBack />

        {loading ? (
          // Show loading spinner inside the content area
          <div className="flex items-center justify-center min-h-[400px]">
            <RiLoader4Fill
              size={70}
              className="animate-spin text-forest-green-500"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[40px]">
            {/* Left Column – Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="w-full h-[300px] md:h-[400px] lg:h-[504px] bg-gray-100 overflow-hidden rounded-md group">
                <Image
                  src={product?.image1?.asset.url || "/placeholder-image.jpg"}
                  alt="Product main image"
                  width={605}
                  height={504}
                  className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                  priority
                />
              </div>

              {/* Gallery Images */}
              <div className="flex flex-row justify-start gap-4">
                {product?.image2?.asset?.url ? (
                  <>
                    {[1, 2].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-full sm:w-1/2 h-[120px] bg-gray-100 rounded-md overflow-hidden group"
                      >
                        <Image
                          src={product?.image2?.asset.url || "/image/About.png"}
                          alt={`Gallery image ${idx + 1}`}
                          width={288}
                          height={120}
                          className="w-full h-full object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-center text-gray-400 w-full">
                    No gallery images available
                  </p>
                )}
              </div>
            </div>

            {/* Right Column – Product Info */}
            <div className="w-full h-full rounded-md text-black">
              <h2 className="text-2xl font-semibold mb-2">{product?.name}</h2>
              <p className="text-[#B81A14] font-medium text-[24px] mb-6">
                ${product?.price}
              </p>
              <h3 className="font-semibold text-xl mb-4">Description</h3>
              <PortableText
                value={
                  Array.isArray(product?.description)
                    ? product?.description
                    : []
                }
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-[19px] mb-4">{children}</p>
                    ),
                  },
                }}
              />
              {product?.slug?.current && (
                <OrderButton slug={product.slug.current} inStock />
              )}
            </div>
          </div>
        )}
      </div>

      <ProductInfo />
      <Footer />
    </section>
  );
}
