import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

const JungleCamp = () => {
  const jungleCamps = [
    {
      id: 1,
      name: "PARSILI JUNGLE CAMP",
      location: "Pench National Park",
      description: "Award-winning lodge set amidst pristine wilderness. Experience luxury meets nature.",
      features: ["Guided Safaris", "Bird Watching", "Nature Walks", "Luxury Tents"],
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "SHEPOUR FORT",
      location: "Madhya Pradesh",
      description: "Historic fort turned luxury wildlife lodge. Panoramic views of the jungle.",
      features: ["Historical Tours", "Wildlife Photography", "Cultural Experiences", "Fine Dining"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "PENCH NATIONAL PARK LODGE",
      location: "Pench National Park",
      description: "Located on the border of Madhya Pradesh. Immerse yourself in tiger territory.",
      features: ["Tiger Tracking", "Night Safaris", "River Views", "Naturalist Guides"],
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      name: "SANJAY DUBRI TIGER RESERVE",
      location: "Sanjay Dubri Tiger Reserve",
      description: "New conservation-focused lodge opening soon. Be among the first to experience.",
      features: ["Exclusive Preview Access", "Conservation Programs", "Premium Accommodations"],
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80",
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);

  const nextSlide = () => {
    setStartIndex(prev => (prev + 1) % jungleCamps.length);
  };

  const prevSlide = () => {
    setStartIndex(prev => (prev - 1 + jungleCamps.length) % jungleCamps.length);
  };

  const visibleCamps = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleCamps.push(jungleCamps[(startIndex + i) % jungleCamps.length]);
  }

  return (
    <div
      className="py-16 px-4 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/texture.webp')",
      }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#613a1a] drop-shadow-lg">
          Jungle Camps India
        </h1>
        <p className="text-[#2b2a29] max-w-3xl mx-auto text-lg mt-2 drop-shadow-md">
          Explore award-winning wildlife lodges and connect with nature like never before.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-center">

        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          className="text-black/40 hover:bg-[#613a1a] p-3 rounded-full mx-3 border border-[#613a1a]"
        >
          <FaChevronLeft />
        </button>

        {/* CAROUSEL */}
        <div className="flex gap-8 justify-center overflow-hidden">

          {visibleCamps.map((camp) => (
            <div
              key={camp.id}
              className="w-72 flex-shrink-0"
            >
              {/* IMAGE */}
              <div className="overflow-hidden shadow-lg ">
                <img
                  src={camp.image}
                  alt={camp.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className=" p-4 rounded-lg">
                <h2 className="text-xl font-bold text-[#2b2a29]">{camp.name}</h2>

                <div className="flex items-center justify-center gap-2 text-gray-700 mt-1">
                  <FaMapMarkerAlt /> {camp.location}
                </div>

                <p className="text-gray-800 mt-2 text-center">{camp.description}</p>

                
              </div>
            </div>
          ))}

        </div>

        
        <button
          onClick={nextSlide}
          className="text-black/40 hover:bg-[#613a1a] p-3 rounded-full mx-3 border border-[#613a1a]"
        >
          <FaChevronRight />
        </button>

      </div>
    </div>
  );
};

export default JungleCamp;
