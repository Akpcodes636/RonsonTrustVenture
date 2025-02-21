"use client";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedSections() {
  return (
    <section className="py-16 bg-[#ECECEC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* First Card */}
          <Link href="/About" className="w-full md:w-1/2 max-w-[610px] group">
            <div className="relative w-full h-[450px] sm:h-[500px] md:h-[595px] overflow-hidden bg-blue-900 transition-transform duration-300">
              <Image
                src="/image/caterpillar3.jpg"
                alt="Global Investment Solutions"
                width={800}
                height={500}
                className="object-cover w-full h-full brightness-50 transition-all duration-300 group-hover:brightness-40"
              />
              <div className="absolute inset-0 p-2 sm:p-10 flex flex-col justify-end text-white">
                <h2 className="text-xl lg:text-2xl sm:text-3xl font-bold mb-4 heading">
                  Global Spare Parts Solutions
                </h2>
                <p className="text-lg sm:text-xl mb-6 body-text">
                  Ronson Trust Ventures is a leading provider of high-quality spare parts, ensuring businesses around the world have access to reliable components for their operations. From automotive to industrial machinery, we specialize in sourcing and distributing essential parts with efficiency and precision.
                </p>
                <span className="text-base sm:text-lg font-semibold group-hover:underline">
                  Where we operate →
                </span>
              </div>
            </div>
          </Link>

          {/* Second Card */}
          <Link href="/About" className="w-full md:w-1/2 max-w-[610px] group">
            <div className="relative w-full h-[450px] sm:h-[500px] md:h-[595px] overflow-hidden bg-yellow-700 transition-transform duration-300">
              <Image
                src="/image/caterpillar4.jpg"
                alt="Investment Excellence"
                width={800}
                height={500}
                className="object-cover w-full h-full brightness-50 transition-all duration-300 group-hover:brightness-40"
              />
              <div className="absolute inset-0 p-2 sm:p-10 flex flex-col justify-end text-white">
                <h2 className="text-xl lg:text-2xl sm:text-3xl font-bold mb-4 heading">
                  Excellence in Supply & Distribution
                </h2>
                <p className="text-lg sm:text-xl mb-6 body-text">
                  With a vast network and a commitment to excellence, Ronson Trust Ventures delivers tailored spare parts solutions to meet the diverse needs of industries worldwide. Our expertise in logistics and procurement guarantees seamless distribution across multiple sectors.
                </p>
                <span className="text-base sm:text-lg font-semibold group-hover:underline">
                  Our solutions →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
