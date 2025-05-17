// app/products/[slug]/page.tsx
import { PortableText } from "@portabletext/react";
import { getProductBySlug } from "../../lib/sanity"; // your query function
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Button from "@/app/components/ui/Button";
import GoBack from "@/app/components/ui/GoBack";
import ProductInfo from "@/app/components/Products/ProductInfo";

export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  console.log(product);

  if (!product) return <div>Product not found</div>;

  return (
    <section>
      <div className="lg:background mobile-bg min-h-[300px]">
        <Header />
        <div className="pt-[176px] lg:pt-[247px] pb-[52px] container-sm mx-auto text-white text-center">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            <span className="text-[#DE9693]">Our Products – </span>
            Built for Performance
          </h1>
        </div>
      </div>

      <div className="container-sm mx-auto py-12 lg:py-[120px] px-4">
        <GoBack />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          {/* Image Section */}
          <div className="w-full ">
            <div className="flex flex-col gap-4 md:gap-[32px]">
              {/* Main Image */}
              <div className="w-full max-w-[605px] h-[300px] md:h-[400px] lg:h-[504px] mx-auto bg-gray-100">
                <Image
                  src={product?.image1?.asset.url || "/placeholder-image.jpg"}
                  alt="Product main image"
                  width={605}
                  height={504}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              {/* Gallery Images */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[29px]">
                {product.image2?.asset?.url ? (
                  <>
                    {[1, 2].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-full sm:max-w-[288px] h-[120px] rounded-[5px] overflow-hidden bg-gray-100"
                      >
                        <Image
                          src={product?.image2?.asset.url || "/placeholder-image.jpg"}
                          alt={`Gallery image ${idx + 1}`}
                          width={288}
                          height={120}
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-center text-gray-400">
                    No gallery images available
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-2">{product?.name}</h2>
            <p className="text-[#B81A14] font-medium text-[24px] mb-6">${product?.price}</p>

            <h3 className="font-semibold text-xl mb-4">Description</h3>
            <PortableText
              value={
                Array.isArray(product?.description) ? product.description : []
              }
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-[20px] mb-4">{children}</p>
                  ),
                },
              }}
            />

            <Button
              type="button"
              style="primary"
              css="w-full sm:w-[182px] h-[48px] bg-[#B81A14] rounded-[5px] mt-8"
              // fn={() => console.log('Order now')}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
      <ProductInfo />
      <Footer />
    </section>
  );
}
