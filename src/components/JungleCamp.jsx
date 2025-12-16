import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const JungleCamp = () => {
  const slides = [
    {
      name: "PARSILI JUNGLE CAMP",
      location: "Pench National Park",
      description: "Award-winning lodge set amidst pristine wilderness.",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "SHEPOUR FORT",
      location: "Madhya Pradesh",
      description: "Historic fort turned luxury wildlife lodge.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "PENCH NATIONAL PARK LODGE",
      location: "Pench National Park",
      description: "Immerse yourself in tiger territory.",
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "SANJAY DUBRI TIGER RESERVE",
      location: "Sanjay Dubri Tiger Reserve",
      description: "Be among the first to experience.",
      image:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(slides.length);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [transition, setTransition] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const duplicatedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const total = slides.length;
    if (currentIndex >= total * 2) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(total);
      }, 500);
    }
    if (currentIndex < total) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(total + (currentIndex % total));
      }, 500);
    }
  }, [currentIndex]);

  const slideWidth =
    containerRef.current?.offsetWidth / slidesToShow || 300;

  return (
    <div
      className="py-24 px-4 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/images/texture.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#613a1a]">
          Jungle Camps India
        </h1>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Explore award-winning wildlife lodges and connect with nature.
        </p>
      </div>

      {/* Carousel - Fixed layout structure */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Left button */}
          <button
            onClick={prevSlide}
            className="z-10 p-3 border border-[#613a1a] rounded-full hover:bg-[#613a1a] hover:text-white transition flex-shrink-0 mr-4"
          >
            <FaChevronLeft />
          </button>

          {/* Carousel container - Improved width handling */}
          <div className="flex-1 overflow-hidden">
            <div ref={containerRef} className="w-full">
              <div
                className={`flex ${transition ? "transition-transform duration-500 ease-in-out" : ""
                  }`}
                style={{
                  transform: `translateX(-${currentIndex * slideWidth}px)`,
                }}
              >
                {duplicatedSlides.map((camp, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                    style={{ width: slideWidth }}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={camp.image}
                        alt={camp.name}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-4 text-center">
                        <h2 className="font-bold text-lg text-[#2b2a29]">
                          {camp.name}
                        </h2>
                        <div className="flex items-center justify-center gap-1 text-gray-600 text-sm mt-1">
                          <FaMapMarkerAlt />
                          {camp.location}
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          {camp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right button */}
          <button
            onClick={nextSlide}
            className="z-10 p-3 border border-[#613a1a] rounded-full hover:bg-[#613a1a] hover:text-white transition flex-shrink-0 ml-4"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JungleCamp;