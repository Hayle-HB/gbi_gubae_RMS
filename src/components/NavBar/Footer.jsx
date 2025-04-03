import React from "react";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaHome,
  FaChurch,
  FaCalendarAlt,
  FaAddressBook,
  FaCross,
  FaPray,
  FaBookReader,
  FaUsers,
  FaDotCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#5f0113] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo */}
        <div className="pt-12 pb-8 flex flex-col items-center border-b border-gray-700">
          <img src={logo} alt="EOTC Logo" className="h-16 w-16 mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
          </h2>
          <p className="text-gray-300 text-center">
            Ethiopian Orthodox Tewahedo Church
          </p>
        </div>

        {/* Links Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                About Us
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#ffd700]"></span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The Ethiopian Orthodox Tewahedo Church at Haramaya University,
                serving our community with faith and love since its
                establishment.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#ffd700]"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaHome className="mr-2 text-[#ffd700]" /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaChurch className="mr-2 text-[#ffd700]" /> Services
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaCalendarAlt className="mr-2 text-[#ffd700]" /> Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaAddressBook className="mr-2 text-[#ffd700]" /> Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#ffd700]"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/liturgy"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaCross className="mr-2 text-[#ffd700]" /> ቅዳሴ | Divine
                    Liturgy
                  </a>
                </li>
                <li>
                  <a
                    href="/services/prayer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaPray className="mr-2 text-[#ffd700]" /> ጸሎት | Prayer
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/services/study"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaBookReader className="mr-2 text-[#ffd700]" /> ትምህርት |
                    Bible Study
                  </a>
                </li>
                <li>
                  <a
                    href="/services/youth"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <FaUsers className="mr-2 text-[#ffd700]" /> የወጣቶች አገልግሎት |
                    Youth Ministry
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#ffd700]"></span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-[#ffd700] text-lg" />
                  <p className="text-gray-300 text-sm">
                    Haramaya University, Ethiopia
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-[#ffd700] text-lg" />
                  <p className="text-gray-300 text-sm">+251 123 456 789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#ffd700] text-lg" />
                  <p className="text-gray-300 text-sm">
                    info@eotc-haramaya.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Ethiopian Orthodox Tewahedo
              Church. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-[#ffd700] transition-colors duration-200"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#ffd700] transition-colors duration-200"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#ffd700] transition-colors duration-200"
              >
                <FaTelegram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
