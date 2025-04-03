import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Hero/Home";
import Footer from "./components/NavBar/Footer";
import Register from "./pages/Registration/Register";
import { FaQuoteLeft } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-[#5f0113] mb-8 text-center">
        Coming Soon
      </h1>
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-start justify-center mb-6">
          <FaQuoteLeft className="text-[#5f0113]/40 text-2xl mt-1 flex-shrink-0" />
          <div className="ml-4">
            <p className="text-[#5f0113] text-xl md:text-2xl font-medium leading-relaxed">
              የእግዚአብሄር ቃል በልብዎ ውስጥ በብዛት ይኑር
            </p>
            <p className="text-[#5f0113]/60 text-base mt-2">ቆላስያስ 3:16</p>
            <p className="text-gray-600 text-lg mt-4 italic leading-relaxed">
              Let the word of Christ dwell in you richly
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registrations" element={<ComingSoon />} />
            <Route path="/about" element={<ComingSoon />} />

            {/* Redirect all other routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
