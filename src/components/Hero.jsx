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

      {/* Background Slides - Unchanged */}
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

      {/* Navigation Arrows - Layout optimized */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 transform -translate-y-1/2 z-20 text-white/40 hover:text-white/80 p-2 sm:p-3 md:p-4 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FaChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 transform -translate-y-1/2 z-20 text-white/40 hover:text-white/80 p-2 sm:p-3 md:p-4 rounded-full hover:scale-110 transition-all duration-300"
      >
        <FaChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      </button>

      {/* Content Container - Layout optimized */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20">
            
            {/* Heading Container - Better vertical spacing */}
            <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mb-6 sm:mb-8 md:mb-10">
                {bannerImages[currentSlide].heading.map((line, i) => (
                  <div
                    key={i}
                    className="font-normal text-white leading-tight text-center"
                  >
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      {line}
                    </h1>
                  </div>
                ))}
              </div>
              
              {/* Subheading - Proper spacing */}
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <p className="text-white/80 font-sans italic text-center text-base sm:text-lg md:text-xl lg:text-2xl">
                  {bannerImages[currentSlide].subHeading}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Hero;