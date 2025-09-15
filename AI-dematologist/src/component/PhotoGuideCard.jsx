import React from "react";
import { useNavigate } from "react-router";

export default function PhotoGuideCard() {
  const navigate = useNavigate();

  // const handleGotItClick = () => {
  //   navigate("http://localhost:8501/");
  // };

  return (
    <div className="relative max-w-md mx-auto mt-6 bg-[#F5F9FF] rounded-2xl px-8 py-8 flex flex-col items-center shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-[#183B56] leading-snug">
          শুরুর আগে - জানুন <br />
          কিভাবে উপযুক্ত ছবি তুলবেন
        </h2>
      </div>
      {/* SVG illustration */}
      <div className="flex justify-center mb-2">
        
      </div>
      <div className="text-center mt-4 mb-8">
        <span className="text-[#5A7184] text-base">
          পরিষ্কার ফ্রেমের জন্য সর্বনিম্ন দূরত্ব <br />
          <span className="font-bold text-[#183B56]">(২-৪&quot; অথবা ৫-১০ সেমি)</span> রাখুন
        </span>
      </div>
      {/* Dots indicator */}
      {/* Got It Button */}
      <button
        className="bg-[#3D8FF7] hover:bg-[#2563eb] text-white font-semibold rounded-full py-3 w-full max-w-xs text-base transition cursor-pointer"
        // onClick={handleGotItClick}
      >
       <a href="http://localhost:8501/">বুঝেছি</a> 
      </button>
      {/* Left and right arrows */}
      
    </div>
  );
}