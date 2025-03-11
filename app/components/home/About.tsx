"use client";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedSections() {
  return (
    <section className="py-12 md:py-16 bg-[#ECECEC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-20">
          <div className="w-full md:w-2/5">
            <p className="font-semibold text-lg md:text-xl text-black mb-2">Dependable</p>
            <h1 className="text-3xl md:text-4xl font-bold text-black">Your Trusted Source for Quality Parts</h1>
          </div>
          <div className="w-full md:w-3/5">
            <p className="text-black text-base md:text-lg">
              We understand the importance of reliability in your machinery. That's why we offer a comprehensive selection of parts from leading brands. Our commitment to quality ensures your equipment runs smoothly, minimizing downtime.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blue Card */}
          <div className="overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/image/background.jpg" 
                alt="Extensive range of parts" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-black">
              <h2 className="text-xl md:text-3xl font-semibold mb-4">Extensive Range of Quality Parts Available</h2>
              <p>From JCB to Caterpillar, we have it all.</p>
            </div>
          </div>

          {/* Yellow Card */}
          <div className="overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/image/background.jpg" 
                alt="Expert knowledge" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-black">
              <h2 className="text-xl md:text-3xl font-semibold mb-4">Expert Knowledge to Assist You</h2>
              <p>Our team is here to help you find exactly what you need.</p>
            </div>
          </div>

          {/* Red Card */}
          <div className="overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/image/background.jpg" 
                alt="Quality service" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-black">
              <h2 className="text-xl md:text-3xl font-semibold mb-4 leading-6">Quality You Can Trust, Service You Deserve</h2>
              <p>Experience exceptional service with every order.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}