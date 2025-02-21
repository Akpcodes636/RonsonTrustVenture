"use client";
import React, { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";

const CarouselComponent = () => {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <div id="carouselDarkVariant" className="relative" data-twe-carousel-init data-twe-ride="carousel">
      {/* Carousel Indicators */}
      <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            data-twe-target="#carouselDarkVariant"
            data-twe-slide-to={index}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {[
          {
            src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
            label: "First slide label",
            text: "Some representative placeholder content for the first slide."
          },
          {
            src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
            label: "Second slide label",
            text: "Some representative placeholder content for the second slide."
          },
          {
            src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
            label: "Third slide label",
            text: "Some representative placeholder content for the third slide."
          }
        ].map((slide, index) => (
          <div key={index} className={`relative float-left w-full opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${index === 0 ? 'data-twe-carousel-active' : ''}`} data-twe-carousel-fade data-twe-carousel-item>
            <img src={slide.src} className="block w-full" alt={slide.label} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">{slide.label}</h5>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center text-black opacity-50 transition-opacity duration-150 hover:opacity-90 focus:opacity-90" type="button" data-twe-target="#carouselDarkVariant" data-twe-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center text-black opacity-50 transition-opacity duration-150 hover:opacity-90 focus:opacity-90" type="button" data-twe-target="#carouselDarkVariant" data-twe-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselComponent;
