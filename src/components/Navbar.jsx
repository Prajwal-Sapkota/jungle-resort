import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaArrowRight,
    FaChevronDown
} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    const menuItems = [
        { id: 1, title: "About" },
        {
            id: 2,
            title: "Destinations",
            hasDropdown: true,
            subItems: [
                { id: 21, title: "Pench Jungle Camp" },
                { id: 22, title: "Kanha Jungle Camp" },
                { id: 23, title: "Tadoba Jungle Camp" },
                { id: 24, title: "Rukhad Jungle Camp" },
            ]
        },
        { id: 3, title: "Special Offers" },
        { id: 4, title: "Central India by JCI" },
        { id: 5, title: "The Jungle Book" },
        { id: 6, title: "Partner With Us" },
        { id: 7, title: "Contact Us" },
        { id: 8, title: "Investors" },
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
                        {/* LEFT — Logo */}
                        <div className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-24 lg:h-24"
                            />
                        </div>

                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-4 xl:space-x-6 2xl:space-x-8">
                            <a href="#" className="font-normal text-gray-800 hover:text-gray-600 transition-colors text-sm lg:text-base">
                                About
                            </a>
                            <a href="#" className="font-normal text-gray-800 hover:text-gray-600 transition-colors text-sm lg:text-base flex items-center">
                                Destinations
                                <FaChevronDown className="ml-1 text-xs lg:text-sm" />
                            </a>
                            <a href="#" className="font-normal text-gray-800 hover:text-gray-600 transition-colors text-sm lg:text-base">
                                Special Offers
                            </a>
                            <a href="#" className="font-normal text-gray-800 hover:text-gray-600 transition-colors text-sm lg:text-base">
                                Jungle Book
                            </a>
                            <a href="#" className="font-normal text-gray-800 hover:text-gray-600 transition-colors text-sm lg:text-base">
                                Contact
                            </a>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className=" text-gray-800 focus:outline-none pr-2"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="text-2xl sm:text-3xl" />
                            ) : (
                                <FaBars className="text-2xl sm:text-3xl" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isMenuOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible delay-300'
                    }`}
            >
                <div
                    className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/images/texture.webp')`,
                        }}
                    ></div>


                    <div
                        className="absolute inset-0 "
                        style={{
                            backgroundImage: `url("/images/texture.webp")`,
                        }}
                    ></div>
                </div>

                <div
                    className={`relative h-full w-full overflow-y-auto transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="sticky top-0 z-10 backdrop-blur-sm p-4 sm:p-5 md:p-6 flex justify-end items-end">
                        <button
                            onClick={closeMenu}
                            className="text-gray-500 hover:text-gray-800 transition-colors transform hover:scale-105 active:scale-95 flex items-center p-2"
                        >
                            <span className="text-xl sm:text-xl md:text-2xl font-medium">CLOSE</span>
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 min-h-[calc(100vh-80px)]">
                        {/* Jungle Book Content */}
                        <div className="lg:w-2/3 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10  mb-4 sm:mb-6 lg:mb-0 order-2 lg:order-1">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-stretch min-h-[420px] border border-gray-600/40 p-4">
                                <div
                                    className="w-full h-60 sm:h-72 md:h-80 lg:h-full bg-cover bg-center rounded"
                                    style={{ backgroundImage: "url('/images/junglebook.webp')" }}
                                ></div>

                                <div className="flex flex-col justify-center h-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
                                    <div className="py-4">
                                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-normal text-gray-600 leading-tight">
                                            The Jungle Book
                                        </h1>
                                    </div>

                                    <div className="space-y-3 sm:space-y-4 py-4">
                                        <p className="text-sm sm:text-base md:text-md lg:text-lg xl:text-xl text-gray-800 leading-relaxed">
                                            The story of <span className="italic">"The Jungle Book"</span>, written by
                                            <span className="font-bold text-gray-900 ml-1">Rudyard Kipling</span>, is famously inspired by
                                            various jungles and wildlife sanctuaries in India.
                                        </p>
                                    </div>

                                    <div>
                                        <button className="group relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-900 text-white font-normal px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full hover:shadow-xl hover:shadow-gray-800/30 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-full sm:w-auto">
                                            <span className="relative z-10 flex items-center justify-center">
                                                EXPLORE
                                                <FaArrowRight className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-1.5 md:ml-2 lg:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-1.5 md:group-hover:translate-x-2 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 overflow-y-auto order-1 lg:order-2 text-center lg:text-right">
                            <div className="space-y-0 sm:space-y-0.5 lg:space-y-1 xl:space-y-2">
                                {menuItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col items-center lg:items-end"
                                        onMouseEnter={() => item.hasDropdown && setOpenSubMenu(item.id)}
                                        onMouseLeave={() => item.hasDropdown && setOpenSubMenu(null)}
                                    >
                                        <a
                                            href="#"
                                            className="group flex justify-center lg:justify-end w-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 border-b border-gray-600/30"
                                            onClick={() =>
                                                item.hasDropdown &&
                                                setOpenSubMenu(openSubMenu === item.id ? null : item.id)
                                            }
                                        >
                                            <span className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium flex items-center">
                                                {item.title}
                                                {item.hasDropdown && (
                                                    <FaChevronDown
                                                        className="ml-1 sm:ml-1.5 md:ml-2 text-xs sm:text-sm transition-transform duration-200"
                                                        style={{
                                                            transform:
                                                                openSubMenu === item.id ? "rotate(180deg)" : "rotate(0deg)",
                                                        }}
                                                    />
                                                )}
                                            </span>
                                        </a>

                                        {item.hasDropdown && openSubMenu === item.id && (
                                            <div className="flex flex-col mt-0.5 sm:mt-1 text-center lg:text-right lg:mr-4">
                                                {item.subItems.map((sub) => (
                                                    <a
                                                        key={sub.id}
                                                        href="#"
                                                        className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 hover:text-gray-800 transition-colors"
                                                    >
                                                        {sub.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;