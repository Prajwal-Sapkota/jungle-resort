import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Special = () => {
  const offers = [
    {
      title: "Winter Wonderland Offer",
      desc: "Enjoy discounted stays at our luxurious jungle lodges this winter.",
      image: "/images/offer1.webp",
    },
    {
      title: "Help Me Plan",
      desc: "Our travel experts will help you plan your dream safari holiday.",
      image: "/images/offer3.webp",
    },
    {
      title: "Stay A Little Longer",
      desc: "Book 4+ nights at premium safari lodges and enjoy special prices.",
      image: "/images/offer2.webp",
    },
    {
      title: "Last Minute Offers",
      desc: "Grab the best rates for last-minute safari bookings.",
      image: "/images/offer4.webp",
    },
    {
      title: "Family Safari Package",
      desc: "Special rates for families with kids. Educational wildlife experiences included.",
      image: "/images/offer3.webp",
    },
    {
      title: "Honeymoon Retreat",
      desc: "Romantic jungle getaway with private dinners and couple spa treatments.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !horizontalRef.current) return;

    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    const scrollDistance =
      horizontal.scrollWidth - container.offsetWidth;

    if (scrollDistance <= 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(horizontal, {
      x: -scrollDistance,
      ease: "none",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#f4fbf7] via-[#e6f4ec] to-[#d9efe3] overflow-hidden">
      {/* Header */}
      <div className="pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font- text-center text-[#613a1a] py-4 ">
            Special Offers
          </h2>
          <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover exclusive deals and packages for your next jungle adventure
          </p>
        </div>
      </div>

      <div className="sticky top-0 h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-start overflow-hidden"> 
        <div
          ref={horizontalRef}
          className="flex items-center gap-8 px-8"
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`flex-shrink-0 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${isMobile ? 'w-72 sm:w-80' : 'w-80 sm:w-96 md:w-[28rem]'
                }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-110 ${isMobile ? 'h-48 sm:h-56' : 'h-56 sm:h-64'
                    }`}
                />
                <div className="absolute top-3 right-3 bg-[#613a1a] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Limited
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className={`font-bold text-gray-800 mb-2 ${isMobile ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                  }`}>
                  {offer.title}
                </h3>
                <p className={`text-gray-600 mb-4 line-clamp-2 ${isMobile ? 'text-sm' : 'text-base'
                  }`}>
                  {offer.desc}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#613a1a] font-bold text-lg sm:text-xl">
                    20% OFF
                  </span>
                  <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#613a1a] text-white rounded-lg hover:bg-[#815533] transition-colors duration-300 text-sm sm:text-base">
                    Explore Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Special;