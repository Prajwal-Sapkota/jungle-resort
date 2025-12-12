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

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress for scaling
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Better calculation for mobile
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
      className="relative w-full min-h-[150vh] md:min-h-[110vh] flex items-start"
    >
      <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12 gap-10 w-full">

        {/* LEFT */}
        <div className="md:w-1/2 flex justify-center">
          <div className={`${isMobile ? 'relative' : 'sticky top-[50%]'} w-full flex flex-col justify-center items-center text-center py-10 md:py-20`}>
            {/* Leaf background - only on desktop */}
            <div className="hidden md:block absolute inset-0 left-0 w-full md:w-3xl pointer-events-none overflow-hidden">
              <img
                src="/images/leaf.avif"
                alt="Leaf Background"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-transparent to-white/100"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-4 px-8 py-6 md:py-10">
              {/* Logo centered */}
              <img src="/images/logo.png" alt="logo" className="w-32 md:w-36 h-auto" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Authentic Responsible Immersive
              </h2>

              <p className="text-base md:text-lg text-gray-700 max-w-md">
                Dedicated to providing an unparalleled safari experience in India.
                Discover the best that Indian wildlife and hospitality has to offer.
              </p>

              <button className="text-gray-600 px-4 md:px-5 py-2 md:py-3 font-semibold text-base md:text-lg border-b border-gray-500">
                our story
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT - Image with larger size on mobile */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className={`${isMobile ? 'sticky top-1/4' : 'sticky top-[40%]'} flex justify-center ${isMobile ? 'mt-20' : 'mt-48'}`}>
            <div
              className={`rounded-full overflow-hidden shadow-xl  ${
                isMobile ? 'w-48 h-48' : 'w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80'
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