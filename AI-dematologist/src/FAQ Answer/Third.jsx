import React from "react";
import { useNavigate } from "react-router";

const Question3 = () => {
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
          কাদের এআই ডার্মাটোলজিস্ট ব্যবহার করা উচিত?
        </h1>
        <p className="text-[#183B56] mb-4">
          যদি আপনার ত্বকে এক বা একাধিক দাগ থাকে, তাহলে AI Dermatologist আপনার জন্য উপযুক্ত। আমাদের গ্রাহকরা হলেন এমন ব্যক্তি যারা মাত্র কয়েকটি ত্বকের দাগের শিকার, থেকে শুরু করে যারা ত্বকের ক্যান্সার থেকে বেঁচে গেছেন এবং তাদের ত্বকের স্বাস্থ্যের উপর নজর রাখার একটি সহজ এবং সঠিক উপায় চান। তাদের মতো, আপনিও একটি ত্বকের স্বাস্থ্য রুটিন তৈরি করতে পারেন এবং AI Dermatologist এর সাথে নিয়মিত আপনার ত্বক পর্যবেক্ষণ করতে পারেন যাতে এটি সুস্থ থাকে। অনেক গ্রাহক আমাদের বলেন যে তারা AI Dermatologist ব্যবহার করে ত্বকের রোগ সনাক্ত করার সময়ও ঝুঁকিতে ছিলেন তা সম্পর্কে তারা সম্পূর্ণরূপে অবগত ছিলেন না। এটি নিয়মিত আপনার ত্বকের স্বাস্থ্য পরীক্ষা এবং পর্যবেক্ষণে সক্রিয় ভূমিকা নেওয়ার গুরুত্ব দেখায়।
          </p>
      
        
      </div>
    </div>
  );
};

export default Question3;