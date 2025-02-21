"use client";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SparePartsPage() {
  const router = useRouter();
  const manitowocParts = [
    {
      id: "1",
      name: "Manitowoc Crawler 4000 and 4100 Transmision partadd",
      Model:"3940W, 4100W",
      category: "Hydraulic Systems",
      availability: "In Stock",
      image: "/image/manitowoc.jpg"
    },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="pt-64 pb-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 tracking-tight">
            Manitowoc Crane Parts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mt-4">
            Authorized Local Dealer - THE RIGHT PARTS, RIGHT NOW.
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-1 gap-6">
        <div className="bg-white shadow-md rounded-xl p-8 border border-red-500 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4 mb-4">
            <Phone className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          </div>
          <div className="text-gray-700 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-600" />
              <span>+234 7062470966</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-600" />
              <span>ralphronsontvnigeria@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Parts Catalog Section */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-red-700 mb-6 text-center">Available Parts</h2>
        <p className="text-gray-700 text-center mb-8">Browse our selection of genuine Manitowoc crane parts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {manitowocParts.map((part) => (
            <div key={part.id} className="group bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:border-red-700 transition-all cursor-pointer transform hover:scale-105" onClick={() => router.push(`/spare?name=${encodeURIComponent(part.name)}`)}>
              <Image src={part.image} alt={part.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" width={500} height={500} />
              <div className="p-6">
                <p className="text-gray-600 text-sm font-medium mb-2">{part.category}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{part.name}</h3>
                <p className="text-gray-700 text-sm">Model: {part.Model}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-xl p-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Need Expert Assistance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of Manitowoc parts specialists is here to help you find exactly what you need.
          </p>
          <button onClick={() => router.push('/contact')} className="bg-white text-red-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg">
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
