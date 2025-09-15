import React from "react";
import { useNavigate } from "react-router";

const AIDermatologistSection = () => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate("/guide");
  };

  return (
    <div className="w-full bg-white text-[#0B3D91] font-sans">
      {/* Top Highlight Bar */}
      <div className="bg-gradient-to-r from-[#5C6BF2] to-[#4C52E3] text-white text-center py-4 text-xl md:text-2xl font-semibold">
        এমন একটি ত্বক পরীক্ষা শুরু করুন যা সবকিছু বদলে দিতে পারে!
      </div>

      {/* What do you know Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          মাত্র ১ মিনিটে আপনি কী জানতে পারবেন?
        </h2>
        <p className="text-center text-gray-700 mb-10">
          ৫৮টির বেশি রোগ সনাক্তকরণ এবং ঝুঁকি মূল্যায়ন
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <ul className="space-y-4 text-green-600">
            <li>
              ✔️ <span className="font-bold">ত্বকের ক্যান্সার</span> (মেলানোমা, BKK, BCC ইত্যাদি)
            </li>
            <li>
              ✔️ <span className="font-bold">পূর্ব-ক্যান্সারজনিত ক্ষত</span> (নীল ও ডিসপ্লাস্টিক নেভাস ইত্যাদি)
            </li>
            <li>✔️ ৬ ধরণের ব্রণ</li>
          </ul>

          <ul className="space-y-4 text-green-600">
            <li>
              ✔️ <span className="font-bold">সৌম্য গঠন</span> (তিল, অ্যাঞ্জিওমা, ডার্মাটোফাইব্রোমা ইত্যাদি)
            </li>
            <li>
              ✔️ <span className="font-bold">প্যাপিলোমা ভাইরাস</span> (warts, প্যাপিলোমাস, মলাস্ক ইত্যাদি)
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer"
            onClick={handleTryNowClick}
          >
            এখনই চেষ্টা করুন!
          </button>
        </div>

        {/* Tip Section */}
        <div className="bg-orange-100 border-l-4 border-orange-400 text-gray-700 p-4 mt-8 rounded-md">
          <p>
            💡 <span className="font-bold">টিপ:</span> আরও নির্ভুল ফলাফলের জন্য, উচ্চমানের ৩টি ছবি আপলোড করুন যাতে
            এআই আক্রান্ত অংশটি সঠিকভাবে বিশ্লেষণ করতে পারে।
          </p>
        </div>
      </div>

      {/* AI Dermatologist Save Life Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/assets/human-scan.png"
            alt="Human Scan"
            className="max-w-sm w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            এআই ডার্মাটোলজিস্ট আপনার জীবন বাঁচাতে পারে
          </h3>
          <p className="text-gray-700 mb-6">
            এআই ডার্মাটোলজিস্ট যে সবচেয়ে বিপজ্জনক রোগ শনাক্ত করতে পারে তার একটি হলো ত্বকের ক্যান্সার।
          </p>

          <h4 className="font-semibold text-lg text-black mb-4">
            ত্বকের ক্যান্সার মার্কিন যুক্তরাষ্ট্র এবং বিশ্বজুড়ে সবচেয়ে সাধারণ ক্যান্সার:
          </h4>

          <ul className="space-y-3 text-green-600">
            <li>➡️ প্রতি ঘন্টায় গড়ে ২ জনের বেশি মানুষ ত্বকের ক্যান্সারে মারা যায়।</li>
            <li>➡️ মেলানোমা এমন একটি ক্যান্সার যা দ্রুত ছড়িয়ে পড়ে।</li>
            <li>➡️ মেলানোমা পুরুষ ও মহিলাদের মধ্যে দ্বিতীয় সর্বাধিক সাধারণ ক্যান্সার (১৫-২৯ বছর বয়সে)।</li>
            <li>➡️ প্রতি ৫০ জনের মধ্যে একজন জীবদ্দশায় ত্বকের ক্যান্সারে আক্রান্ত হন।</li>
            <li>➡️ প্রাথমিকভাবে শনাক্ত হলে মেলানোমার ৫ বছরের বেঁচে থাকার হার ৯৯%।</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIDermatologistSection;