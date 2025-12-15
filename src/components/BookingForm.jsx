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
        <div className="max-w-8xl bg-white/90 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg ">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start md:items-center">

                <div className="col-span-1 flex justify-center sm:justify-start pt-8 ">
                    <div className="flex items-center text-black font-normal text-sm sm:text-base md:text-lg tracking-wide sm:tracking-wider">
                        <FaStar className="text-gray-500 pr-1 sm:pr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        LOWEST AVAILABLE RATE
                    </div>
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col border-b border-gray-400">
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

                <div className="col-span-1 sm:col-span-1 md:col-span-1 flex flex-col border-b border-gray-400">
                    <span className="text-xs sm:text-sm md:text-base text-left font-semibold text-gray-700 pb-1 sm:pb-1.5 tracking-wide">Check-In</span>
                    <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-none text-center focus:outline-none text-sm sm:text-base"
                    />
                </div>

                <div className="col-span-1 sm:col-span-1 md:col-span-1 flex flex-col border-b border-gray-400">
                    <span className="text-xs sm:text-sm md:text-base text-left font-semibold text-gray-700 pb-1 sm:pb-1.5 tracking-wide">Check-Out</span>
                    <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-none text-center focus:outline-none text-sm sm:text-base"
                    />
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-1 flex justify-center md:justify-end py-4 sm:py-5 md:py-0">
                    <button className="bg-[#613a1a] text-white font-normal px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:bg-[#2b2a29] hover:scale-105 transition-all w-full sm:w-auto text-sm sm:text-base md:text-md">
                        Check Availability
                    </button>
                </div>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-5 sm:mt-6 md:mt-8 text-black text-center text-xs sm:text-sm md:text-base">

                <h1 className="hidden sm:block text-sm md:text-lg text-[#70391a] font-semibold uppercase mr-0 sm:mr-4 md:mr-6">
                    Why Book Direct?
                </h1>

                <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                    <MdFreeBreakfast className="text-[#2b2a29] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    <span className="font-medium">Complimentary Breakfast</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                    <FaCocktail className="text-[#2b2a29] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    <span className="font-medium">Local Welcome Drink</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                    <GiForestCamp className="text-[#2b2a29] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    <span className="font-medium">Nature Walk</span>
                </div>
            </div>


        </div>
    );
};

export default BookingForm;