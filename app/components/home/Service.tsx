"use client";
import Image from "next/image";

export default function Service() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg font-semibold text-blue-600 mb-2">Services</p>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Comprehensive Parts Supply and Consultation Services</h1>
          <p className="text-gray-700 text-base md:text-lg">
            We specialize in supplying high-quality parts for leading machinery brands. Our expert consultations ensure you get the right solutions for your needs.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="overflow-hidden">
            <div className="relative h-56 md:h-64">
              <Image
                src="/image/background.jpg"
                alt="Reliable parts supply"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-black">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center">Reliable Parts Supply for Your Equipment</h2>
              <p className="text-center text-gray-700">We provide a wide range of parts to keep your equipment running smoothly.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="overflow-hidden">
            <div className="relative h-56 md:h-64">
              <Image
                src="/image/background.jpg"
                alt="Expert consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-black">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center">Expert Consultation Tailored to Your Needs</h2>
              <p className="text-center text-gray-700">Our team offers personalized advice to optimize your machinery&apos;s performance.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="overflow-hidden">
            <div className="relative h-56 md:h-64">
              <Image
                src="/image/background.jpg"
                alt="Fast delivery services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-black">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center">Fast and Efficient Delivery Services</h2>
              <p className="text-center text-gray-700">We ensure prompt delivery so you can minimize downtime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}