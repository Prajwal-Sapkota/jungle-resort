import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      id: 1,
      url: '/images/banner1.webp',
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
            <div className="absolute inset-0 bg-black/30 sm:bg-black/25 md:bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 top-1/2 transform -translate-y-1/2 z-20 text-white/40 hover:text-white/80 p-1.5 sm:p-2 md:p-3 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FaChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-14 lg:h-14 transition-transform group-hover:translate-x-2" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2 z-20 text-white/40 hover:text-white/80 p-1.5 sm:p-2 md:p-3 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FaChevronRight className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-14 lg:h-14 transition-transform group-hover:translate-x-2" />
      </button>

    
      

      <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 z-10 relative text-center max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
          {bannerImages[currentSlide].heading.map((line, i) => (
            <h1
              key={i}
              className="font-normal text-white leading-tight"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {line}
              </span>
            </h1>
          ))}
        </div>
        <p className="text-white/80 font-sans italic mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-sm sm:text-base md:text-lg lg:text-xl">
          {bannerImages[currentSlide].subHeading}
        </p>
      </div>
    </div>
  );
};

export default Hero;