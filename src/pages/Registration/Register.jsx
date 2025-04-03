import React, { useState, useCallback, memo } from "react";
import logo from "../../assets/logo.png";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import HeaderSection from "./HeaderSection";
import Bottom from "./Bottom";
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

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    christianName: "",
    gender: "",
    age: "",
    campus: "",
    studyField: "",
    buildingNumber: "",
    dormNumber: "",
    region: "",
    zone: "",
    district: "",
    motherTongue: "",
    additionalLanguages: "",
    previousDiocese: "",
    previousChurch: "",
    sundaySchoolParticipation: false,
    previousSundaySchool: "",
    serviceSection: "",
    sundaySchoolCourses: "",
    clergyStatus: "",
    ordinationYear: "",
    ordinationDiocese: "",
    ordainingBishop: "",
    phone: "",
    email: "",
    facebook: "",
    telegram: "",
    preferredServices: ["", "", ""],
    specialTalents: "",
    photo: null,
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handlePreferredServiceChange = useCallback((index, value) => {
    setFormData((prev) => ({
      ...prev,
      preferredServices: prev.preferredServices.map((service, i) =>
        i === index ? value : service
      ),
    }));
  }, []);

  const handleRadioChange = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handlePhotoChange = useCallback((e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );









  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6">
      <div className="w-full max-w-[100%] mx-auto">
        <HeaderSection />

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm rounded-lg sm:rounded-xl overflow-hidden border border-gray-100"
        >
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-6">
              <LeftSection
                formData={formData}
                handleInputChange={handleInputChange}
                handleRadioChange={handleRadioChange}
              />
              <RightSection
                formData={formData}
                handleInputChange={handleInputChange}
                handleRadioChange={handleRadioChange}
                handlePreferredServiceChange={handlePreferredServiceChange}
                handlePhotoChange={handlePhotoChange}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#5f0113] font-semibold py-2.5 sm:py-3 px-8 sm:px-12 rounded-lg 
                border-2 border-[#5f0113] text-base sm:text-lg 
                focus:outline-none focus:ring-1 focus:ring-[#5f0113] focus:ring-offset-1
                transition-all duration-200 hover:bg-[#5f0113] hover:text-white cursor-pointer w-full sm:w-auto"
              >
                <span>መዝግብ</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 sm:mt-8">
          <Bottom />
        </div>
      </div>
    </div>
  );
};

export default Register;
