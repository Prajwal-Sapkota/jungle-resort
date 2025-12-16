import React, { useState } from 'react';
import { FaCocktail, FaStar } from "react-icons/fa";
import { FaChevronDown } from 'react-icons/fa6';
import { GiForestCamp } from 'react-icons/gi';
import { MdFreeBreakfast } from 'react-icons/md';

const BookingForm = () => {
    const [location, setLocation] = useState('I want to escape to');
    const [checkIn, setCheckIn] = useState("2025-12-10");
    const [checkOut, setCheckOut] = useState("2025-12-11");

    const locations = [
        'I want to escape to',
        'Ranthambore Tiger Reserve',
        'Jim Corbett National Park',
        'Kanha National Park',
        'Bandhavgarh National Park',
        'Sundarbans National Park'
    ];

    return (
        <div className="max-w-8xl bg-white/90 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg">
            {/* Main Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 md:gap-6 items-start md:items-center mb-5 sm:mb-6 md:mb-8">
                
                {/* Lowest Rate Badge - Fixed alignment */}
                <div className="md:col-span-1 flex  justify-center md:justify-start">
                    <div className="flex items-center">
                        <FaStar className="text-gray-500 pr-1 sm:pr-2 w-5 h-5 sm:w-6 sm:h-6" />
                        <h1 className="text-black font-normal text-sm sm:text-base md:text-lg tracking-wide sm:tracking-wider">
                            LOWEST AVAILABLE RATE
                        </h1>
                    </div>
                </div>

                {/* Location Select - Better width control */}
                <div className="md:col-span-2">
                    <div className="flex flex-col border-b border-gray-400">
                        <span className="text-xs sm:text-sm md:text-base text-left font-semibold text-gray-700 pb-1 sm:pb-1.5">Location</span>
                        <div className="relative">
                            <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 appearance-none border-none focus:outline-none text-sm sm:text-base"
                            >
                                {locations.map((loc, index) => (
                                    <option key={index} value={loc}>{loc}</option>
                                ))}
                            </select>
                            <span className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <FaChevronDown className='text-gray-500 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Check-in Date - Fixed spacing */}
                <div className="md:col-span-1">
                    <div className="flex flex-col border-b border-gray-400">
                        <span className="text-xs sm:text-sm md:text-base text-left font-semibold text-gray-700 pb-1 sm:pb-1.5 tracking-wide">Check-In</span>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-none text-center focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                </div>

                {/* Check-out Date - Fixed spacing */}
                <div className="md:col-span-1">
                    <div className="flex flex-col border-b border-gray-400">
                        <span className="text-xs sm:text-sm md:text-base text-left font-semibold text-gray-700 pb-1 sm:pb-1.5 tracking-wide">Check-Out</span>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-none text-center focus:outline-none text-sm sm:text-base"
                        />
                    </div>
                </div>

                {/* Check Availability Button - Better alignment */}
                <div className="md:col-span-1 flex justify-center md:justify-end pt-2 md:pt-0">
                    <button className="bg-[#613a1a] text-white font-normal px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:bg-[#2b2a29] hover:scale-105 transition-all w-full md:w-auto text-sm sm:text-base md:text-md">
                        Check Availability
                    </button>
                </div>
            </div>

            {/* Why Book Direct Section - Improved layout */}
            <div className="pt-4 sm:pt-5 md:pt-6 ">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    
                    {/* Heading - Fixed visibility */}
                    <div className="w-full sm:w-auto">
                        <h2 className=" hidden sm:block text-sm md:text-lg text-[#70391a] font-semibold uppercase text-center sm:text-left">
                            Why Book Direct?
                        </h2>
                    </div>

                    {/* Benefits - Better grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
                        
                        {/* Complimentary Breakfast */}
                        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 whitespace-nowrap">
                            <MdFreeBreakfast className="text-[#2b2a29] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            <span className="font-medium text-sm sm:text-base md:text-base">Complimentary Breakfast</span>
                        </div>

                        {/* Local Welcome Drink */}
                        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 whitespace-nowrap">
                            <FaCocktail className="text-[#2b2a29] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            <span className="font-medium text-sm sm:text-base md:text-base">Local Welcome Drink</span>
                        </div>

                        {/* Nature Walk */}
                        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 whitespace-nowrap">
                            <GiForestCamp className="text-[#2b2a29] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            <span className="font-medium text-sm sm:text-base md:text-base">Nature Walk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;