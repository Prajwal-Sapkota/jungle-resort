import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      id: 1,
      url: '/images/banner1.jpg',
      heading: ['EXCLUSIVE LUXURY', 'WILDLIFE EXPERIENCES', 'AT JUNGLE CAMPS INDIA'],
      subHeading: 'Hospitality Wildlife Indulgence'
    },
    {
      id: 2,
      url: '/images/banner2.webp',
      heading: ['ADVENTURE AWAITS', 'IN THE HEART OF THE JUNGLE', 'EXPLORE NOW'],
      subHeading: 'Unforgettable Jungle Safari'
    },
    {
      id: 3,
      url: '/images/banner3.webp',
      heading: ['LUXURY MEETS NATURE', 'JUNGLE RESORTS', 'BOOK YOUR STAY'],
      subHeading: 'Experience Wildlife in Comfort'
    },
    {
      id: 4,
      url: '/images/banner4.webp',
      heading: ['ADVENTURE AWAITS', 'IN THE HEART OF THE JUNGLE', 'EXPLORE NOW'],
      subHeading: 'Unforgettable Jungle Safari'
    }
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [bannerImages.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? bannerImages.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + 1) % bannerImages.length
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Banner Slideshow */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${image.url}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/30 p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FaChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 lg:w-18 lg:h-18" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 text-white/30 p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FaChevronRight className="w-5 sm:w-6 h-5 sm:h-6 lg:w-18 lg:h-18" />
      </button>

      {/* Slide Indicators/Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gold scale-125' : 'bg-cream/50 hover:bg-cream'}`}
          />
        ))}
      </div>

      {/* Center Text */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 z-10 relative text-center">
        {bannerImages[currentSlide].heading.map((line, i) => (
          <h1
            key={i}
            className=" font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed"
          >
            {line}
          </h1>
        ))}
        <p className="text-base sm:text-lg md:text-xl text-white/80 font-sans italic mt-2 sm:mt-4">
          {bannerImages[currentSlide].subHeading}
        </p>
      </div>
    </div>
  );
};

export default Hero;
