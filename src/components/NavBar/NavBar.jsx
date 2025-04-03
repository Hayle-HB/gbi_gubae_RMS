import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaList,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaQuoteLeft,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  const quotes = [
    {
      text: "የእግዚአብሄር ቃል በልብዎ ውስጥ በብዛት ይኑር",
      reference: "ቆላስያስ 3:16",
      englishText: "Let the word of Christ dwell in you richly",
      englishRef: "Colossians 3:16",
    },
    {
      text: "እግዚአብሔር ፍቅር ነው",
      reference: "1ኛ ዮሐንስ 4:8",
      englishText: "God is love",
      englishRef: "1 John 4:8",
    },
    {
      text: "በእግዚአብሔር ዘንድ የማይቻል ነገር የለም",
      reference: "ሉቃስ 1:37",
      englishText: "For with God nothing shall be impossible",
      englishRef: "Luke 1:37",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
          setIsVisible(true);
        }, 1000);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 ${
          hasScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="EOTC Logo"
                  className="h-16 w-16 object-contain"
                />
                <div className="hidden md:block ml-3">
                  <span className="text-xl font-bold text-[#5f0113]">ሐረማያ</span>
                  <span className="ml-2 text-sm text-[#5f0113]">
                    ዩንቨርስቲ ግቢ ጉባኤ
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/")
                      ? "bg-[#5f0113]/10 text-[#5f0113]"
                      : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                  }`}
                >
                  <FaHome className="mr-2" />
                  Home
                </a>
                <a
                  href="/register"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/register")
                      ? "bg-[#5f0113]/10 text-[#5f0113]"
                      : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                  }`}
                >
                  <FaUserPlus className="mr-2" />
                  Register
                </a>
                <a
                  href="/registrations"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/registrations")
                      ? "bg-[#5f0113]/10 text-[#5f0113]"
                      : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                  }`}
                >
                  <FaList className="mr-2" />
                  Registrations
                </a>
                <a
                  href="/about"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/about")
                      ? "bg-[#5f0113]/10 text-[#5f0113]"
                      : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                  }`}
                >
                  <FaInfoCircle className="mr-2" />
                  About
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#5f0113] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5f0113]"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-md bg-white/30 transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white/95 backdrop-blur-lg shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
            <div className="flex items-center">
              <img
                src={logo}
                alt="EOTC Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="ml-3">
                <span className="text-lg font-bold text-[#5f0113]">ሐረማያ</span>
                <span className="ml-2 text-xs text-[#5f0113] block">
                  ዩንቨርስቲ ግቢ ጉባኤ
                </span>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[#5f0113] hover:bg-gray-100/50"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          {/* Drawer content with active states */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-2 px-2">
              <a
                href="/"
                className={`flex items-center px-4 py-3.5 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive("/")
                    ? "bg-[#5f0113]/10 text-[#5f0113]"
                    : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="mr-3 h-5 w-5" />
                Home
              </a>
              <a
                href="/register"
                className={`flex items-center px-4 py-3.5 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive("/register")
                    ? "bg-[#5f0113]/10 text-[#5f0113]"
                    : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus className="mr-3 h-5 w-5" />
                Register
              </a>
              <a
                href="/registrations"
                className={`flex items-center px-4 py-3.5 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive("/registrations")
                    ? "bg-[#5f0113]/10 text-[#5f0113]"
                    : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaList className="mr-3 h-5 w-5" />
                Registrations
              </a>
              <a
                href="/about"
                className={`flex items-center px-4 py-3.5 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive("/about")
                    ? "bg-[#5f0113]/10 text-[#5f0113]"
                    : "text-gray-700 hover:bg-[#5f0113]/5 hover:text-[#5f0113]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaInfoCircle className="mr-3 h-5 w-5" />
                About
              </a>
            </nav>
          </div>

          {/* Bible Quote Section */}
          <div className="mt-auto p-6 border-t border-gray-200/50 mb-safe bg-[#5f0113]/5">
            <div className="relative overflow-hidden">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-start">
                  <FaQuoteLeft className="text-[#5f0113]/40 text-xl mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-[#5f0113] font-medium text-base leading-relaxed">
                      {quotes[quoteIndex].text}
                    </p>
                    <p className="text-[#5f0113]/60 text-sm mt-1.5">
                      {quotes[quoteIndex].reference}
                    </p>
                    <p className="text-gray-600 text-sm mt-3 italic leading-relaxed">
                      {quotes[quoteIndex].englishText}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {quotes[quoteIndex].englishRef}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default NavBar;
