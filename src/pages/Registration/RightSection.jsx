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


  const RightSection = memo(
    ({
      formData,
      handleInputChange,
      handleRadioChange,
      handlePreferredServiceChange,
      handlePhotoChange,
    }) => (
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Preferred Service */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
          <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
              9
            </span>
            በተለይ ምን አገልግሎት ላይ እንዲሳተፉ ይፈልጋሉ?
          </label>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaMusic className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              rows="3"
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base resize-none"
              placeholder="የሚፈልጉትን አገልግሎት ይጥቀሱ"
            ></textarea>
          </div>
        </div>

        {/* Clergy Status */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
          <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
              10
            </span>
            ክህነት ካለዎት ምልክት ያድርጉ
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {[
              { id: "deacon", label: "ዲያቆን" },
              { id: "priest", label: "ቄስ" },
              { id: "mergeta", label: "መርጌታ" },
            ].map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-2 bg-gray-50 p-2 sm:p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <input
                  type="radio"
                  id={option.id}
                  name="clergyStatus"
                  checked={formData.clergyStatus === option.id}
                  onChange={(e) =>
                    handleRadioChange("clergyStatus", e.target.value)
                  }
                  className="h-4 w-4 text-[#5f0113] focus:ring-[#5f0113]"
                />
                <label
                  htmlFor={option.id}
                  className="text-sm sm:text-base text-gray-700 cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          {formData.clergyStatus && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
                <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                  <FaCalendarAlt className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
                </span>
                <input
                  type="text"
                  name="ordinationYear"
                  value={formData.ordinationYear}
                  onChange={handleInputChange}
                  className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                  placeholder="የተቀበሉበት ዘመን"
                />
              </div>
              <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
                <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                  <FaChurch className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
                </span>
                <input
                  type="text"
                  name="ordinationDiocese"
                  value={formData.ordinationDiocese}
                  onChange={handleInputChange}
                  className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                  placeholder="ሀገረ ስብከት"
                />
              </div>
              <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
                <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                  <FaUserTie className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
                </span>
                <input
                  type="text"
                  name="ordainingBishop"
                  value={formData.ordainingBishop}
                  onChange={handleInputChange}
                  className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                  placeholder="ክህነት የሰጠው ጳጳስ"
                />
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
          <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
              11
            </span>
            የሚገኙበት አድራሻ
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
              <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                placeholder="ሞባይል"
              />
            </div>
            <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
              <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                placeholder="ኢሜይል"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
              <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
              </span>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                placeholder="ፌስቡክ አካውንት"
              />
            </div>
            <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
              <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                <FaTelegram className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
              </span>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleInputChange}
                className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                placeholder="ቴሌግራም"
              />
            </div>
          </div>
        </div>

        {/* Preferred Services */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
          <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
              12
            </span>
            ማገልገል የሚፈልጉበት ክፍል
          </label>
          <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            (ትምህርት ክፍል፣ መዝሙር ክፍል፤ቋንቋና ልዩ ፍላጎት ክፍል፣ ልማት ክፍል፤ ሙያና ተራድአ፣ አባላት ጕዳይ፣
            ሒሳብና ንብረት፣ ባች ማስተባበርያ)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {["I", "II", "III"].map((num, idx) => (
              <div
                key={num}
                className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors"
              >
                <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
                  <FaPalette className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
                </span>
                <input
                  type="text"
                  value={formData.preferredServices[idx] || ""}
                  onChange={(e) =>
                    handlePreferredServiceChange(idx, e.target.value)
                  }
                  className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                  placeholder={`ምርጫ ${num}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Special Talents */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
          <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
              13
            </span>
            ያልዎት ልዩ ተሰጥኦ ወይም ዝንባሌ
          </label>
          <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            (ዋሽንት፣ በገና መደርደር፣ ድርሰት፣ ዕደ ጥበብ ወይም ሌላ)
          </div>
          <div className="flex rounded-lg overflow-hidden border border-gray-200 hover:border-[#5f0113]/50 transition-colors">
            <span className="inline-flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500">
              <FaPalette className="h-4 w-4 sm:h-5 sm:w-5 text-[#5f0113]" />
            </span>
            <textarea
              name="specialTalents"
              value={formData.specialTalents}
              onChange={handleInputChange}
              rows="3"
              className="flex-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base resize-none"
              placeholder="ያልዎትን ልዩ ተሰጥኦ ይግለጹ"
            ></textarea>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#5f0113]/20 transition-all duration-300">
          <label className="block text-gray-700 font-bold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
            <span className="bg-[#5f0113] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm">
              14
            </span>
            ፎቶ
          </label>
          <div className="mt-1 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-5 sm:pb-6 border-2 border-gray-200 border-dashed rounded-lg hover:border-[#5f0113]/50 transition-colors">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-xs sm:text-sm text-gray-600 justify-center">
                <label
                  htmlFor="photo"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-[#5f0113] hover:text-[#8b0000] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#5f0113]"
                >
                  <span>ፎቶ ይምረጡ</span>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="sr-only"
                    onChange={handlePhotoChange}
                    accept="image/*"
                  />
                </label>
                <p className="pl-1">ወይም ወደዚህ ይጎትቱ</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF እስከ 10MB</p>
            </div>
          </div>
        </div>
      </div>
    )
  );


export default RightSection;
