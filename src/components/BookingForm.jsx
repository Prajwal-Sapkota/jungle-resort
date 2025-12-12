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
        <div className="max-w-8xl bg-white/90 p-6 md:p-8 rounded-lg">

            {/* LOWEST RATE */}


            {/* FORM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 items-center">
                <div className="col-span-1 flex justify-center md:justify-start mb-6 md:mb-0">
                    <div className="flex items-center text-black font-semibold text-lg tracking-widest">
                        <FaStar className="text-gray-500 mr-2" />
                        LOWEST AVAILABLE RATE
                    </div>
                </div>

                {/* LOCATION */}
                <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col border-b border-gray-400">
                    <label className="text-md text-left font-semibold text-gray-700 py-1">Location</label>
                    <div className="relative">
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full bg-white px-4 py-3 appearance-none border-b border-gray-400"
                        >
                            {locations.map((loc, index) => (
                                <option key={index} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <FaChevronDown className='text-gray-500' />
                        </span>
                    </div>
                </div>

                {/* CHECK-IN */}
                <div className="col-span-1 sm:col-span-1 md:col-span-1 flex flex-col border-b border-gray-400">
                    <label className="text-md text-left font-semibold text-gray-700 py-1 tracking-wide">Check-In</label>
                    <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-white px-4 py-3 text-center border-b border-gray-400"
                    />
                </div>

                {/* CHECK-OUT */}
                <div className="col-span-1 sm:col-span-1 md:col-span-1 flex flex-col border-b border-gray-400">
                    <label className="text-md text-left font-semibold text-gray-700 py-1 tracking-wide">Check-Out</label>
                    <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-white px-4 py-3 text-center border-b border-gray-400"
                    />
                </div>

                {/* BUTTON */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1 flex justify-center md:justify-end mt-4 sm:mt-0  border-gray-400">
                    <button className="bg-[#613a1a] text-white font-bold px-18 py-3 rounded-lg hover:bg-[#2b2a29] hover:scale-105 transition-all w-full sm:w-auto">
                        Check Availability
                    </button>
                </div>

            </div>

            {/* WHY BOOK DIRECT */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 text-black text-center md:text-left text-xs lg: text-md">
                <h1 className="hidden md:block text-md text-[#70391a] font-semibold uppercase">Why Book Direct?</h1>

                <div className="flex items-center gap-2">
                    <MdFreeBreakfast className="text-[#2b2a29] text-xl" />
                    <span className="font-medium">Complimentary Breakfast</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaCocktail className="text-[#2b2a29] text-xl" />
                    <span className="font-medium">Local Welcome Drink</span>
                </div>

                <div className="flex items-center gap-2">
                    <GiForestCamp className="text-[#2b2a29] text-xl" />
                    <span className="font-medium">Nature Walk</span>
                </div>
            </div>

        </div>
    );
};

export default BookingForm;
