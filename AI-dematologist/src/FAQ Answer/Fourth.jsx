import React from "react";
import { useNavigate } from "react-router";

const Question4 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F9FF] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <button
          className="flex items-center text-[#183B56] text-base mb-6 gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          
          <span className="bg-blue-500 px-5 py-3 text-white text-sm rounded-sm  ">← Back</span>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[#183B56] mb-6">
          AI Dermatologist কি ডাক্তারের স্থলাভিষিক্ত?
        </h1>
        <p className="text-[#183B56] mb-4">
          এআই ডার্মাটোলজিস্ট কোনও রোগ নির্ণয়ের যন্ত্র নয় এবং এটি আপনার ডাক্তারের কাছে যাওয়ার বিকল্প নয়। এআই ডার্মাটোলজিস্ট আপনাকে আপনার ত্বক সম্পর্কে আরও সচেতন হতে সাহায্য করে যাতে আপনি সময়মতো এবং প্রস্তুত অবস্থায় একজন ডাক্তারের কাছে যেতে পারেন। যদি কোনও সময় আপনি অস্বস্তি বোধ করেন বা আপনার ত্বকের দাগ পরিবর্তন, জ্বালা বা রক্তপাত দেখতে পান, তাহলে আমরা আপনাকে দ্বিধা ছাড়াই একজন চিকিৎসা বিশেষজ্ঞের কাছে 
        </p>
        
      </div>
    </div>
  );
};

export default Question4;