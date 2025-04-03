import React from "react";
import {
  FaUserPlus,
  FaChurch,
  FaCalendarAlt,
  FaCross,
  FaPray,
  FaBookReader,
  FaUsers,
  FaHandHoldingHeart,
  FaMusic,
  FaBible,
  FaPrayingHands,
  FaBell,
  FaGift,
  FaHeart,
  FaHandshake,
  FaBookOpen,
  FaMicrophone,
  FaVideo,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import cross from "../../assets/EOTC/bright-light-jesus-cross.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative pt-6 sm:pt-16 pb-8 sm:pb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Left side - Main Content */}
              <div className="flex-1 text-center max-w-2xl">
                {/* Logo and Title Section */}
                <div className="flex items-center justify-center gap-2 xs:gap-4 sm:gap-6 mb-4 sm:mb-8">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="h-12 w-12 xs:h-16 sm:h-20 xs:w-16 sm:w-20 object-contain"
                  />
                  <div className="h-12 xs:h-14 sm:h-16 w-px bg-gray-200"></div>
                  <div className="flex-1">
                    <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#5f0113] leading-tight">
                      ሐረማያ ዩንቨርሲቲ ግቢ ጉባኤ
                    </h1>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-600 mt-0.5 sm:mt-1">
                      Haramaya University Gbi Gubae
                    </p>
                  </div>
                </div>

                {/* Welcome Message */}
                <div className="mt-6 space-y-3">
                  <h2 className="text-lg xs:text-xl sm:text-2xl text-[#5f0113] font-semibold">
                    እንኳን ኢትዮጵያ ኦርቶዶክስ ተዋሕዶ <br /> ቤተ ክርስቲያን በደህና መጡ።
                  </h2>
                  <p className="text-sm xs:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
                    "እነሆ፥ በአንድነት መኖር እንደ ምን ያህል መልካም እንደ ምን ያህልም ያማረ ነው።" መዝ.
                    ፻፴፫፥፩
                  </p>
                </div>

                {/* Church Name Section */}
                {/* <div className="space-y-1.5 xs:space-y-2 sm:space-y-4 mt-5 xs:mt-6 sm:mt-8">
                  <p className="text-base xs:text-lg sm:text-xl text-gray-800 font-medium">
                    የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-600">
                    Ethiopian Orthodox Tewahedo Church
                  </p>
                </div> */}

                {/* Key Features */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
                  <div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md hover:bg-white hover:border-[#5f0113]/20 hover:shadow-xl transition-all duration-300">
                    <FaCross className="w-6 h-6 text-[#5f0113] mx-auto mb-2" />
                    <p className="text-xs xs:text-sm font-medium text-gray-800">
                      ቅዳሴ
                    </p>
                    <p className="text-xs text-gray-600">Divine Liturgy</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md hover:bg-white hover:border-[#5f0113]/20 hover:shadow-xl transition-all duration-300">
                    <FaPray className="w-6 h-6 text-[#5f0113] mx-auto mb-2" />
                    <p className="text-xs xs:text-sm font-medium text-gray-800">
                      ጸሎት
                    </p>
                    <p className="text-xs text-gray-600">Prayer Service</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md hover:bg-white hover:border-[#5f0113]/20 hover:shadow-xl transition-all duration-300 col-span-2 sm:col-span-1">
                    <FaBookReader className="w-6 h-6 text-[#5f0113] mx-auto mb-2" />
                    <p className="text-xs xs:text-sm font-medium text-gray-800">
                      ትምህርት
                    </p>
                    <p className="text-xs text-gray-600">Bible Study</p>
                  </div>
                </div>

                {/* Register Button */}
                <div className="mt-8 xs:mt-10 sm:mt-12 flex justify-center">
                  <a
                    href="/register"
                    className="inline-flex items-center px-6 xs:px-8 py-2.5 xs:py-3 border-2 border-[#5f0113] text-sm xs:text-base font-medium rounded-md text-white bg-[#5f0113] hover:bg-white hover:text-[#5f0113] transition-all duration-200 shadow-md hover:shadow-xl"
                  >
                    <FaUserPlus className="mr-2" />
                    ተመዝገብ | Register
                  </a>
                </div>

                {/* Bible Quote - Left Side */}
                <div className="mt-8 xs:mt-10 sm:mt-12 flex items-center justify-center gap-3 xs:gap-4 text-[#5f0113] px-2">
                  <div className="h-px flex-1 bg-[#5f0113]"></div>
                  <div className="text-center">
                    <p className="text-sm xs:text-base sm:text-lg italic">
                      "የእግዚአብሄር ቃል በልብዎ ውስጥ በብዛት ይኑር"
                    </p>
                    <p className="text-xs xs:text-sm mt-1">Colossians 3:16</p>
                  </div>
                  <div className="h-px flex-1 bg-[#5f0113]"></div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="lg:flex-1 w-full lg:w-auto flex flex-col justify-center items-center px-2 xs:px-4">
                {/* Church Name */}
                <div className="w-full text-center mb-6 space-y-1">
                  <h2 className="text-base xs:text-lg sm:text-xl font-medium text-[#5f0113]">
                    የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
                  </h2>
                  <p className="text-sm xs:text-base text-gray-600">
                    Ethiopian Orthodox Tewahedo Church
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={cross}
                    alt="Cross with Bible"
                    className="w-full max-w-xs xs:max-w-sm sm:max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Bible Quote - Right Side */}
                <div className="mt-6 xs:mt-8 sm:mt-12 flex items-center justify-center gap-3 xs:gap-4 text-[#5f0113]">
                  <div className="h-px flex-1 bg-[#5f0113]"></div>
                  <div className="text-center">
                    <p className="text-sm xs:text-base sm:text-lg italic">
                      "Let the word of Christ dwell in you richly"
                    </p>
                    <p className="text-xs xs:text-sm mt-1">Colossians 3:16</p>
                  </div>
                  <div className="h-px flex-1 bg-[#5f0113]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl font-bold text-[#5f0113]">
              Our Services
            </h2>
            <p className="mt-4 text-lg xs:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the rich spiritual heritage and community of the
              Ethiopian Orthodox Tewahedo Church
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Divine Liturgy */}
            <div className="group flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5f0113]/20">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">ቅዳሴ</h3>
                  <p className="text-base text-gray-500 mt-2">Divine Liturgy</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Experience the sacred Divine Liturgy service every Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Prayer Services */}
            <div className="group flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5f0113]/20">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">ጸሎት</h3>
                  <p className="text-base text-gray-500 mt-2">
                    Prayer Services
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    Daily prayer services and spiritual guidance
                  </p>
                </div>
              </div>
            </div>

            {/* Bible Study */}
            <div className="group flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5f0113]/20">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">ትምህርት</h3>
                  <p className="text-base text-gray-500 mt-2">Bible Study</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Deep dive into the Holy Scriptures and teachings
                  </p>
                </div>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="group flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5f0113]/20">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    የወጣቶች አገልግሎት
                  </h3>
                  <p className="text-base text-gray-500 mt-2">Youth Ministry</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Engaging activities and spiritual growth for young members
                  </p>
                </div>
              </div>
            </div>

            {/* Choir */}
            <div className="group flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5f0113]/20">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    የዜማ አገልግሎት
                  </h3>
                  <p className="text-base text-gray-500 mt-2">Choir Service</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Traditional Ethiopian Orthodox Church music and hymns
                  </p>
                </div>
              </div>
            </div>

            {/* Charity */}
            <div className="group flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5f0113]/20">
              <div className="flex-1 p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">ድጋፍ</h3>
                  <p className="text-base text-gray-500 mt-2">Charity</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Supporting our community through charitable works
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl font-bold text-[#5f0113]">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg xs:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in celebrating our faith and community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Timket */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#5f0113] bg-opacity-10 rounded-xl flex items-center justify-center">
                      <img
                        src={logo}
                        alt="EOTC Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      ጥምቀት
                    </h3>
                    <p className="text-base text-gray-500">Timket</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Epiphany Celebration
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Join us for the annual Timket celebration
                  </p>
                </div>
              </div>
            </div>

            {/* Easter */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#5f0113] bg-opacity-10 rounded-xl flex items-center justify-center">
                      <img
                        src={logo}
                        alt="EOTC Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">ፋሲካ</h3>
                    <p className="text-base text-gray-500">Easter</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Resurrection Celebration
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Celebrate the resurrection of our Lord
                  </p>
                </div>
              </div>
            </div>

            {/* Christmas */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#5f0113] bg-opacity-10 rounded-xl flex items-center justify-center">
                      <img
                        src={logo}
                        alt="EOTC Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">ገና</h3>
                    <p className="text-base text-gray-500">Christmas</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Birth of Christ
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Celebrate the birth of our Savior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl font-bold text-[#5f0113]">
              Our Community
            </h2>
            <p className="mt-4 text-lg xs:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant community of believers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Fellowship */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto flex items-center justify-center">
                <img
                  src={logo}
                  alt="EOTC Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Fellowship
              </h3>
              <p className="mt-2 text-gray-600">Build lasting relationships</p>
            </div>

            {/* Prayer Groups */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto flex items-center justify-center">
                <img
                  src={logo}
                  alt="EOTC Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Prayer Groups
              </h3>
              <p className="mt-2 text-gray-600">Grow in faith together</p>
            </div>

            {/* Bible Study */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto flex items-center justify-center">
                <img
                  src={logo}
                  alt="EOTC Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Bible Study
              </h3>
              <p className="mt-2 text-gray-600">Deepen your understanding</p>
            </div>

            {/* Youth Activities */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f0113] bg-opacity-10 rounded-2xl mx-auto flex items-center justify-center">
                <img
                  src={logo}
                  alt="EOTC Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Youth Activities
              </h3>
              <p className="mt-2 text-gray-600">Engage with peers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl font-bold text-[#5f0113]">
              Contact Us
            </h2>
            <p className="mt-4 text-lg xs:text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5f0113] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Haramaya University Campus
                  </p>
                  <p className="text-gray-600">Dire Dawa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5f0113] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+251 123 456 789</p>
                  <p className="text-gray-600">+251 987 654 321</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5f0113] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <img
                    src={logo}
                    alt="EOTC Logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@eotc-haramaya.org</p>
                  <p className="text-gray-600">contact@eotc-haramaya.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
