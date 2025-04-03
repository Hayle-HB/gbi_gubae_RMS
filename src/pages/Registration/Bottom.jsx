import { memo } from "react";
import { FaCross } from "react-icons/fa";

const Bottom = memo(() => (
  <div className="text-center text-sm sm:text-base text-gray-600 mt-6 sm:mt-8 lg:mt-10 bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
      <FaCross className="text-[#5f0113] h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 animate-pulse" />
      <p className="text-base sm:text-lg lg:text-xl font-medium">
        ተገቢውን መረጃ በትክከል ሞልተው ስለመለሱልን እናመሰግናለን
      </p>
      <FaCross className="text-[#5f0113] h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 animate-pulse" />
    </div>
    <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
      የተማሪዎች ዝርዝር መረጃ መመዝገቢያ ቅጽ - ሐረማያ ዩኒቨርስቲ ግቢ ጉባኤ
    </div>
  </div>
));

export default Bottom;
