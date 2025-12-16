import React, { useState, useEffect, useRef } from "react";

const Story = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    "/images/jungle1.avif",
    "/images/jungle2.avif",
    "/images/jungle3.avif",
    "/images/jungle4.avif",
    "/images/jungle5.avif",
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress = (windowHeight - rect.top) / (windowHeight * 1.5);
      progress = Math.min(Math.max(progress, 0), 1);
      
      const stopPoint = 0.7;
      if (progress > stopPoint) progress = stopPoint;
      
      let minScale, maxScale;
      
      if (isMobile) {
        minScale = 0.5;  
        maxScale = 2.0; 
      } else {
        minScale = 0.5;  
        maxScale = 2.2; 
      }
      
      const scale = minScale + (progress * (maxScale - minScale));
      
      imageRef.current.style.transition = "transform 0.1s linear";
      imageRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          
          {/* LEFT SECTION - Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/images/leaf.avif"
                  alt="Leaf Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/98"></div>
              </div>

              <div className="relative z-10 p-8 sm:p-10 md:p-12 flex flex-col items-center text-center space-y-6 sm:space-y-8">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-24 h-auto sm:w-28 md:w-32 lg:w-36"
                />

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                  Authentic Responsible Immersive
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-sm md:max-w-md leading-relaxed">
                  Dedicated to providing an unparalleled safari experience in India.
                  Discover the best that Indian wildlife and hospitality has to offer.
                </p>

                <button className="text-gray-700 px-8 sm:px-10 py-3 sm:py-4 font-semibold text-lg md:text-xl border-b-2 border-amber-600 hover:border-amber-800 hover:text-gray-900 transition-all duration-300">
                  Our Story
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Image - Tailwind CSS मात्र use गरेर */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div
                ref={imageRef}
                className={`
                  rounded-full 
                  overflow-hidden 
                  shadow-2xl 
                  border-4 
                  md:border-8 
                  border-white
                  ${isMobile 
                    ? 'w-64 h-64 sm:w-72 sm:h-72 mt-12 sm:mt-16' 
                    : 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'
                  }
                `}
                style={{
                  transform: isMobile ? 'scale(0.5)' : 'scale(0.5)',
                  transition: 'transform 0.1s linear'
                }}
              >
                <img
                  src={images[currentImage]}
                  alt="Jungle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;