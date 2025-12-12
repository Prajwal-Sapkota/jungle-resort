import React, { useState, useEffect, useRef } from "react";

const Special = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imagePosition, setImagePosition] = useState("hidden");
    const sectionRefs = useRef([]);
    const containerRef = useRef(null);

    const data = [
        {
            title: "Winter Wonderland in the Indian Jungle",
            description: "Winter Wonderland Offer: Enjoy a discounted stay at any of our luxurious jungle lodges. Experience the magic of winter in the Indian wilderness with crisp mornings, guided safaris, and incredible wildlife sightings. Perfect for photography, nature walks, and unforgettable family adventures.",
            image: "/images/forest1.avif",
        },
        {
            title: "Help Me Plan",
            description: "Our travel experts are ready to help you plan your dream safari holiday. From selecting the perfect lodge to customizing your itinerary and arranging exclusive experiences, we ensure every detail of your adventure is taken care of.",
            image: "/images/forest2.webp",
        },
        {
            title: "Stay A Little Longer Offer",
            description: "Make the most of your trip to some of the finest safari lodges in India. Book for four consecutive nights and enjoy extended wildlife experiences, exclusive activities, and serene evenings under the stars.",
            image: "/images/forest3.webp",
        },
        {
            title: "Last Minute Offers",
            description: "Explore our Last Minute offers and get unbeatable deals on luxurious safaris. Perfect for spontaneous travelers seeking thrilling wildlife adventures with expert guides and top-notch accommodations.",
            image: "/images/forest4.webp",
        },
        {
            title: "JCI Signature Safari Itineraries",
            description: "Explore the signature safari itineraries offered by Jungle Camps India. Each journey is meticulously crafted to offer immersive wildlife experiences, comfortable lodges, and the guidance of expert naturalists for an unforgettable adventure.",
            image: "/images/forest3.webp",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;

            // Determine closest section to center
            let closestIndex = 0;
            let minDistance = Infinity;

            sectionRefs.current.forEach((sec, i) => {
                if (!sec) return;
                const secRect = sec.getBoundingClientRect();
                const secCenter = secRect.top + secRect.height / 2;
                const distance = Math.abs(secCenter - viewportCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = i;
                }
            });

            setActiveIndex(closestIndex);

            
            const isInSection = containerRect.top < viewportHeight && containerRect.bottom > 0;
            
            if (!isInSection) {
                setImagePosition("hidden");
            } else if (containerRect.top > viewportHeight * 0.1) {
                setImagePosition("absolute-top");
            } else if (containerRect.bottom < viewportHeight * 0.9) {
                setImagePosition("absolute-bottom");
            } else {
                setImagePosition("fixed");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-gradient-to-b from-gray-50 to-amber-50 py-20 relative">
            {/* Section Title */}
            <div className="max-w-4xl mx-auto px-4 mb-16 flex items-center justify-center">
                <div className="h-[2px] bg-gray-800 flex-1"></div>
                <h1 className="text-4xl font-bold text-[#613a1a] px-8">Special Offers</h1>
                <div className="h-[2px] bg-gray-800 flex-1"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex gap-10 relative">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 space-y-0">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={el => sectionRefs.current[index] = el}
                            className="min-h-screen py-10 flex flex-col justify-center"
                        >
                            <div className={`relative p-6 lg:p-20 rounded-2xl overflow-hidden 
                                transition-all duration-700 transform
                                ${activeIndex === index 
                                    ? "opacity-100 translate-x-0 scale-100 bg-white shadow-2xl border-l-8 border-[#c8dbd0]"
                                    : "opacity-50 -translate-x-10 scale-95 bg-white shadow-lg border-l-4 border-[#c8dbd0]/50"
                                }`}
                            >
                                <div className="absolute inset-0 bg-[url('/images/leaf.avif')] bg-cover bg-center opacity-10"></div>

                                <div className="relative z-10">
                                    <h2 className="text-2xl lg:text-4xl font-bold text-[#613a1a]">{item.title}</h2>
                                    <p className="text-gray-700 lg:text-lg leading-relaxed py-8 lg:py-10">{item.description}</p>
                                    <button className="hover:bg-[#613a1a] text-[#613a1a] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-[#613a1a]">
                                        Explore Details
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Image */}
                            <div className="lg:hidden mt-2">
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out scale-95 hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Spacer */}
                <div className="hidden lg:block w-1/2"></div>
            </div>

          
            <div className={`hidden lg:block w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white 
                transition-all duration-700 ease-out transform
                ${imagePosition === "fixed"
                    ? 'fixed top-1/2 -translate-y-1/2 right-32 opacity-100 scale-100'
                    : imagePosition === "absolute-bottom"
                    ? 'absolute bottom-10 right-32 opacity-100 scale-95'
                    : imagePosition === "absolute-top"
                    ? 'absolute top-48 right-32 opacity-100 scale-95'
                    : 'opacity-0 scale-90 pointer-events-none'}`}>
                <img
                    src={data[activeIndex].image}
                    alt="Special Offer"
                    className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-110"
                />
            </div>
        </div>
    );
};

export default Special;
