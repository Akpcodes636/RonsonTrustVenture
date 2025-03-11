"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonial() {
  // Array of testimonials
  const testimonials = [
    {
      quote: "The quality of the parts we received was exceptional, and the service was prompt and professional! We couldn't be happier with our experience.",
      name: "John Doe",
      title: "Manager, XYZ Corp"
    },
    {
      quote: "We've been working with this company for years, and they've never let us down. Their parts are reliable and their team is knowledgeable.",
      name: "Jane Smith",
      title: "Operations Director, ABC Industries"
    },
    {
      quote: "Fast delivery and excellent customer service. The team went above and beyond to ensure we got exactly what we needed for our project.",
      name: "Robert Johnson",
      title: "Chief Engineer, Tech Solutions"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 max-w-5xl mx-auto">
          {/* Image on the left - full height */}
          <div className="w-full md:w-1/2 h-80 md:h-auto">
            <div className="relative w-full h-full">
              <Image
                src="/image/background.jpg"
                alt="Happy customer"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          
          {/* Testimonial content on the right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Star rating */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Testimonial quote with transition effect */}
            <div className="min-h-32">
              <blockquote 
                className="text-lg md:text-xl text-gray-800 italic mb-6 transition-opacity duration-500"
                key={current}
              >
                "{testimonials[current].quote}"
              </blockquote>
              
              {/* Customer info */}
              <div>
                <p className="font-bold text-black text-lg">{testimonials[current].name}</p>
                <p className="text-gray-600">{testimonials[current].title}</p>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    index === current ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}