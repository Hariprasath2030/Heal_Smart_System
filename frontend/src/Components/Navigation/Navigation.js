// Navigation.js
import React from "react";
import { FaHome, FaHeartbeat, FaBrain, FaUserMd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SignedIn, UserButton } from '@clerk/clerk-react';

function Navigation({ active, setActive }) {
  const navigate = useNavigate();

  const handleClick = (pageNumber, path) => {
    setActive(pageNumber);
    navigate(path);
  };

  return (
    <nav className="w-full h-[70px] bg-gradient-to-r from-purple-700 to-blue-500 text-white flex items-center justify-between px-5 sticky top-0 z-50 shadow-md">
      <div
        className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
        onClick={() => handleClick(1, "/Home")}
      >
        <FaHome />
        Heal Smart
      </div>

      <ul className="list-none flex gap-8 items-center">
        <li
          onClick={() => handleClick(1, "/Home")}
          className="flex items-center gap-2 cursor-pointer text-lg hover:text-yellow-300 transition"
        >
          <FaHome />
          Home
        </li>
        <li
          onClick={() => handleClick(2, "/SymptomAnalysis")}
          className="flex items-center gap-2 cursor-pointer text-lg hover:text-yellow-300 transition"
        >
          <FaHeartbeat />
          Symptom Analysis
        </li>
        <li
          onClick={() => handleClick(3, "/MentalWellness")}
          className="flex items-center gap-2 cursor-pointer text-lg hover:text-yellow-300 transition"
        >
          <FaBrain />
          Mental Wellness
        </li>
        
        <li
          onClick={() => handleClick(4, "/ConsultDoctor")}
          className="flex items-center gap-2 cursor-pointer text-lg hover:text-yellow-300 transition"
        >
          <FaUserMd />
          Consult Doctor
        </li>
        <li>
        <SignedIn>
    <div className="flex justify-center mt-1">
        <div className="bg-white rounded-full shadow-lg p-2 hover:shadow-xl transition duration-200">
            <UserButton/>
        </div>
    </div>
</SignedIn>

        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
