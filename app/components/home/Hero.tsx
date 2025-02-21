import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { Images } from "../utilis/contents/HomePage.content";

interface SlideType {
  image: string;
  title: string;
  text: string;
}

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Images.length) % Images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Images.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel items */}
      <div className="relative w-full h-full">
        {Images.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-600 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white pt-56">
              <h2 className="text-[40px] md:text-[64px] lg:text-[80px] font-bold mb-2 leading-tight heading tracking-[1.33px]">
                {slide.title}
              </h2>
              <p className="text-[18px] md:text-[20px] lg:text-[25px] mb-4 body-text">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {Images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 h-3 w-8 rounded-sm transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

   
      {/* Play/Pause button */}
      <button
        onClick={toggleAutoplay}
        className="absolute bottom-8 right-8 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default ImageCarousel;