import { memo } from "react";
import logo from "../../assets/logo.png";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSchool,
  FaHome,
  FaChurch,
  FaUserTie,
  FaLanguage,
  FaFacebook,
  FaTelegram,
  FaCross,
  FaMusic,
  FaPalette,
} from "react-icons/fa";
const HeaderSection = memo(() => (
  <div className="text-center mb-8 sm:mb-12 bg-gradient-to-b from-white to-gray-50 py-6 sm:py-8 px-3 sm:px-4 rounded-xl sm:rounded-2xl shadow-sm">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
      {/* Left Quote - Hidden on mobile */}
      <div className="hidden sm:block flex-1 px-6 py-4 bg-[#5f0113]/5 rounded-lg border border-[#5f0113]/10">
        <p className="text-lg sm:text-xl text-[#5f0113] font-medium italic mb-2">
          "በጌታ ውስጥ እጽፋለሁ፥ በእግዚአብሔር ውስጥ እጽፋለሁ፥ በእግዚአብሔር ውስጥ እጽፋለሁ።"
        </p>
        <p className="text-sm text-gray-600">የሐዋርያት ሥራ ፲፰፡፲፩</p>
      </div>

      {/* Logo */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#5f0113] opacity-5 rounded-full transform -translate-x-2 translate-y-2"></div>
        <img
          src={logo}
          alt="Church Logo"
          className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 object-contain relative z-10 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Quote - Hidden on mobile */}
      <div className="hidden sm:block flex-1 px-6 py-4 bg-[#5f0113]/5 rounded-lg border border-[#5f0113]/10">
        <p className="text-lg sm:text-xl text-[#5f0113] font-medium italic mb-2">
          "እግዚአብሔር የሚያደርግ ነገር ሁሉ በጊዜው ይሆናል።"
        </p>
        <p className="text-sm text-gray-600">የሐዋርያት ሥራ ፲፰፡፲፩</p>
      </div>
    </div>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5f0113] mb-3 sm:mb-4 tracking-tight">
      የተማሪዎች ዝርዝር መረጃ መመዝገቢያ ቅጽ
    </h1>
    <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-2 sm:mb-3 font-semibold">
      በኢ/ኦ/ተ/ ቤተክርስቲያን በሰ/ት/ቤቶች ማ/መ/ማኅበረ ቅዱሳን
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
      በሐረር ማዕከል በሐረማያ ወረዳ ማዕከል የግቢ ጉባኤያት አገልግሎት ዋና ክፍል ወደ ግቢ ጉባኤያት የሚገቡ አዳዲስ
      ተማሪዎች መረጃ መያዣ ቅጽ
    </p>
    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-sm w-full sm:w-auto">
        <FaCalendarAlt className="text-[#5f0113] h-4 w-4 sm:h-5 sm:w-5" />
        <p className="text-base sm:text-lg font-semibold">
          የትምህርት ዘመን ________
        </p>
      </div>
      <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-sm w-full sm:w-auto">
        <FaSchool className="text-[#5f0113] h-4 w-4 sm:h-5 sm:w-5" />
        <p className="text-base sm:text-lg font-semibold">ሐረማያ ዩኒቨርስቲ ግቢ ጉባኤ</p>
      </div>
    </div>
  </div>
));

export default HeaderSection;
