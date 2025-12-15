import React, { useState, useEffect, useRef } from "react";

const Story = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height * 0.8), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getScale = () => {
    if (isMobile) {
      return 0.6 + scrollProgress * 1.8;
    } else {

      return 0.5 + scrollProgress * 1.5;
    }
  };

  const scale = getScale();

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[130vh] md:min-h-[110vh] flex items-start"
    >
      <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12 gap-10 w-full">

        {/* LEFT */}
        <div className="md:w-1/2 flex justify-center">
          <div className={`${isMobile ? 'relative' : 'sticky top-[50%]'} w-full flex flex-col justify-center items-center text-center py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24`}>
            <div className="absolute inset-0 left-0 w-full pointer-events-none overflow-hidden">
              <img
                src="/images/leaf.avif"
                alt="Leaf Background"
                className="w-full h-full object-cover opacity-50 "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/95"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5 xl:space-y-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-24 h-auto sm:w-28 md:w-30 lg:w-32 xl:w-36 2xl:w-38"
              />

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal px-2 sm:px-3 md:px-4 lg:px-6">
                Authentic Responsible Immersive
              </h2>

              <p className="text-md sm:text-md md:text-base lg:text-lg xl:text-xl text-gray-700 max-w-[300px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl px-2 sm:px-3 md:px-4">
                Dedicated to providing an unparalleled safari experience in India.
                Discover the best that Indian wildlife and hospitality has to offer.
              </p>

              <button className="text-gray-600 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2 sm:py-2.5 md:py-3 font-semibold text-sm sm:text-base md:text-lg lg:text-xl border-b-2 border-gray-500 hover:border-gray-700 hover:text-gray-800 transition-all duration-300 whitespace-nowrap">
                Our Story
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className={`${isMobile ? 'sticky top-1/4' : 'sticky top-[40%]'} flex justify-center ${isMobile ? 'mt-20' : 'mt-48'}`}>
            <div
              className={`rounded-full overflow-hidden shadow-xl  ${isMobile ? 'w-48 h-48' : 'w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80'
                }`}
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.1s linear",
              }}
            >
              <img
                src={images[currentImage]}
                alt="Jungle"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;