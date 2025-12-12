import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaArrowRight,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaChartLine,
    FaMapMarkerAlt,
    FaTags,
    FaHandshake,
    FaChevronDown
} from "react-icons/fa";
import {
    MdClose,
    MdLocationOn,
    MdLocalOffer,
    MdBusiness,
    MdMenuBook,
    MdTrendingUp
} from "react-icons/md";

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
            <nav className="relative top-0 z-50 bg-white backdrop-blur-sm border-b border-gold/20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between relative">

                        {/* LEFT — Logo */}
                        <div className="flex items-center space-x-2">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="w-32 h-32"
                            />
                        </div>

                        {/* CENTER — Desktop Nav */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10">
                            <a href="#" className=" font-normal text-gray-800 hover:text-gold transition-colors">
                                About
                            </a>
                            <a href="#" className=" font-normal text-gray-800 hover:text-gold transition-colors flex items-center">
                                Destinations
                                <FaChevronDown className="ml-1 text-sm" />
                            </a>
                            <a href="#" className=" font-normal text-gray-800 hover:text-gold transition-colors">
                                Special Offers
                            </a>
                            <a href="#" className="font-normal text-gray-800 hover:text-gold transition-colors">
                                Jungle Book
                            </a>
                            <a href="#" className="font-normal text-gray-800 hover:text-gold transition-colors">
                                Contact
                            </a>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none pr-4"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="text-3xl" />
                            ) : (
                                <FaBars className="text-3xl" />
                            )}
                        </button>

                    </div>
                </div>
            </nav>

            {/* Full Screen Mobile Menu */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isMenuOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible delay-300'
                    }`}
                style={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                {/* Background Image with Overlay */}
                <div
                    className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/images/jungle-background.jpg')`,
                        }}
                    ></div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("/images/texture.webp")`,
                        }}
                    ></div>
                </div>

                <div
                    className={`relative h-full w-full overflow-y-auto transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="sticky top-0 z-10 backdrop-blur-sm p-6 flex justify-end items-end">
                        <button
                            onClick={closeMenu}
                            className="text-cream hover:text-gold transition-colors transform hover:scale-110 flex items-center"
                        >
                            <span className="text-3xl font-medium">CLOSE</span>
                        </button>
                    </div>


                    <div className="flex flex-col lg:flex-row p-4">

                        {/* LEFT SIDE - Jungle Book Content - On desktop: LEFT, On mobile: BOTTOM */}
                        <div className="lg:w-2/3 p-6 md:p-10 lg:p-12  border border-[#707070] order-2 lg:order-1">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
                                {/* LEFT - Image */}
                                <div
                                    className="w-full h-96 lg:h-full bg-cover bg-center "
                                    style={{ backgroundImage: "url('/images/junglebook.webp')" }}
                                ></div>

                                {/* RIGHT - Content */}
                                <div className="p-4 md:p-6 lg:p-8 overflow-y-auto flex flex-col justify-center max-w-xl lg:max-w-2xl">
                                    {/* Title */}
                                    <div className="mb-6">
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight">
                                                The Jungle Book
                                            </h1>
                                    </div>

                                    {/* Story Text */}
                                    <div className="space-y-4 mb-6">
                                        <p className="text-base md:text-lg lg:text-xl text-cream/95 leading-relaxed">
                                            The story of <span className="italic">"The Jungle Book"</span>, written by
                                            <span className="font-bold text-gold ml-1">Rudyard Kipling</span>, is famously inspired by
                                            various jungles and wildlife sanctuaries in India.
                                        </p>
                                        
                                    </div>

                                    {/* Explore Button */}
                                    <div>
                                        <button className="group relative overflow-hidden bg-gradient-to-r from-gold to-earth text-jungle-green font-bold px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 rounded-full hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300 text-sm md:text-base lg:text-lg">
                                            <span className="relative z-10 flex items-center justify-center">
                                                EXPLORE
                                                <FaArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ml-1 md:ml-2 lg:ml-3 group-hover:translate-x-2 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-earth to-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                        </button>
                                    </div>
                                </div>

                            </div>




                        </div>

                        <div className="lg:w-1/3 p-8 md:p-8 lg:p-12 overflow-y-auto order-1 lg:order-2 text-right">
                            {/* Menu Items List */}
                            <div className="space-y-1 lg:space-y-2">
                                {menuItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col"
                                        onMouseEnter={() => item.hasDropdown && setOpenSubMenu(item.id)}
                                        onMouseLeave={() => item.hasDropdown && setOpenSubMenu(null)}
                                    >
                                        <a
                                            href="#"
                                            className="group flex justify-end p-3 transition-all duration-300 border-b-[1px] border-[#bdbdbd]"
                                            onClick={() => item.hasDropdown && setOpenSubMenu(openSubMenu === item.id ? null : item.id)}
                                        >
                                            <span className="text-[#2b2a29] text-lg lg:text-xl font-medium flex justify-end items-center">
                                                {item.title}
                                                {item.hasDropdown && (
                                                    <FaChevronDown
                                                        className="ml-2 text-sm transition-transform duration-200"
                                                        style={{ transform: openSubMenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                                    />
                                                )}
                                            </span>
                                        </a>

                                        {/* Dropdown Submenu */}
                                        {item.hasDropdown && openSubMenu === item.id && (
                                            <div className="flex flex-col mt-1 mr-4 text-right">
                                                {item.subItems.map((sub) => (
                                                    <a
                                                        key={sub.id}
                                                        href="#"
                                                        className="text-[#555] text-base lg:text-lg py-2 px-4 hover:text-gold transition-colors"
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