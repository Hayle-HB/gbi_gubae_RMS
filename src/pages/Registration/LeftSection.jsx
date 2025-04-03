import { memo } from "react";
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
const LeftSection = memo(
  ({ formData, handleInputChange, handleRadioChange }) => (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Institution Name */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            1
          </span>
          የትምህርት ተቋሙ ስም
        </label>
        <input
          type="text"
          value="ሐረማያ ዩኒቨርስቲ"
          disabled
          className="block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-gray-200 bg-gray-50 text-gray-600 text-sm sm:text-base font-medium"
        />
      </div>

      {/* Full Name and Christian Name */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            2
          </span>
          የተማሪው ሙሉ ስም እና የክርስትና ስም
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaUser className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ሙሉ ስም"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaUserTie className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="christianName"
              value={formData.christianName}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="የክርስትና ስም"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaUser className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ጾታ"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaCalendarAlt className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="እድሜ"
            />
          </div>
        </div>
      </div>

      {/* Campus and Study Field */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            3
          </span>
          የተመደቡበት ካምፓስ እና የትምህርት ዘርፍ
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaSchool className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <select
              name="campus"
              value={formData.campus}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base bg-white"
            >
              <option value="">ካምፓስ ይምረጡ</option>
              <option value="main">ዋና ግቢ</option>
              <option value="gendje">ገንደጄ</option>
              <option value="station">ስቴሽን</option>
            </select>
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaIdCard className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <select
              name="studyField"
              value={formData.studyField}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base bg-white"
            >
              <option value="">የትምህርት ዘርፍ</option>
              <option value="NS">NS</option>
              <option value="SS">SS</option>
            </select>
          </div>
        </div>
      </div>

      {/* Building and Dorm Number */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            4
          </span>
          የተመደቡበት ህንጻ እና ዶርም ቁጥር
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaHome className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="buildingNumber"
              value={formData.buildingNumber}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ህንጻ ቁጥር/ስም"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaHome className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="dormNumber"
              value={formData.dormNumber}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ዶርም ቁጥር"
            />
          </div>
        </div>
      </div>

      {/* Region Information */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            5
          </span>
          የመጡበት አካባቢ እና ቋንቋ
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ክልል"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="zone"
              value={formData.zone}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ዞን"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ወረዳ"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaLanguage className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="motherTongue"
              value={formData.motherTongue}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="የአፍ መፍቻ ቋንቋ"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaLanguage className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="additionalLanguages"
              value={formData.additionalLanguages}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ተጨማሪ ቋንቋዎች"
            />
          </div>
        </div>
      </div>

      {/* Previous Church Information */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            6
          </span>
          ከዚህ በፊት የነበሩበት ቤተክርስቲያን መረጃ
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaChurch className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="previousDiocese"
              value={formData.previousDiocese}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ሀገረ ስብከት"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaChurch className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="previousChurch"
              value={formData.previousChurch}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="አጥቢያ ቤተክርስቲያን"
            />
          </div>
        </div>
      </div>

      {/* Sunday School Participation */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            7
          </span>
          ከዚህ በፊት በሰ/ት/ቤት ይሳተፉ ነበር?
        </label>
        <div className="flex items-center space-x-4 mb-3 sm:mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="participatedYes"
              name="sundaySchoolParticipation"
              checked={formData.sundaySchoolParticipation === true}
              onChange={(e) =>
                handleRadioChange("sundaySchoolParticipation", true)
              }
              className="h-4 w-4 text-[#5f0113] focus:ring-[#5f0113]"
            />
            <label htmlFor="participatedYes" className="text-sm text-gray-700">
              እዎ
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="participatedNo"
              name="sundaySchoolParticipation"
              checked={formData.sundaySchoolParticipation === false}
              onChange={(e) =>
                handleRadioChange("sundaySchoolParticipation", false)
              }
              className="h-4 w-4 text-[#5f0113] focus:ring-[#5f0113]"
            />
            <label htmlFor="participatedNo" className="text-sm text-gray-700">
              አልሳተፍም
            </label>
          </div>
        </div>
        {formData.sundaySchoolParticipation && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
              <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                <FaSchool className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
              </span>
              <input
                type="text"
                name="previousSundaySchool"
                value={formData.previousSundaySchool}
                onChange={handleInputChange}
                className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                placeholder="የሰ/ት/ቤቱ ስም"
              />
            </div>
            <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
              <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                <FaUserTie className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
              </span>
              <input
                type="text"
                name="serviceSection"
                value={formData.serviceSection}
                onChange={handleInputChange}
                className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                placeholder="የአገልግሎት ክፍል"
              />
            </div>
          </div>
        )}
      </div>

      {/* Previous Responsibility */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
        <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
          <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
            8
          </span>
          ከዚህ በፊት በክ/ቤ/ስ ያለዎት ኃላፊ ?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaUserTie className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="responsibility"
              value={formData.responsibility}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ኃላፊነት"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaCalendarAlt className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
              placeholder="ለምን ያህል ጊዜ"
            />
          </div>
        </div>
      </div>
    </div>
  )
);


export default LeftSection;
