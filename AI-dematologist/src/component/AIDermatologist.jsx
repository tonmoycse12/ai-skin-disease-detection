import React from "react";
import { useNavigate } from "react-router";

const AIDermatologist = () => {
  const navigate = useNavigate();

  const handleResultClick = () => {
    navigate("/guide");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0B3D91] to-[#062D6E] text-white font-sans pt-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] ">
        {/* Left Side (Steps/Text) */}
        <div className="flex flex-col justify-center px-6 py-12 max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            আপনার ত্বক পরীক্ষা করুন!
          </h1>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <img src="/assets/step1.png" alt="step1" className="w-14 h-14" />
              <p className="text-lg">একটি ত্বকের সমস্যার ছবি তুলুন</p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <img src="/assets/step2.png" alt="step2" className="w-14 h-14" />
              <p className="text-lg">এআই সাথে সাথে আপনার ছবি বিশ্লেষণ করবে</p>
            </div>
            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <img src="/assets/step3.png" alt="step3" className="w-14 h-14" />
              <p className="text-lg">একটি ব্যক্তিগতকৃত পিডিএফ রিপোর্ট পান</p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center gap-4">
              <img src="/assets/step4.png" alt="step4" className="w-14 h-14" />
              <p className="text-lg">এআই কনসালটেন্ট আপনার ফলাফল ব্যাখ্যা করবে</p>
            </div>

            <button 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg mt-6 cursor-pointer shadow-lg"
              onClick={handleResultClick}
            >
              সাথে সাথে ফলাফল দেখুন
            </button>

            <p className="text-xs opacity-80">
              * স্ক্যান ফলাফল কোনো ডায়াগনোসিস নয়। সঠিক ডায়াগনোসিস ও চিকিৎসার
              জন্য ডাক্তার এর সাথে পরামর্শ করুন।
            </p>
          </div>
        </div>

        {/* Right Side (Image + White Background) */}
        <div className=" flex justify-center items-center py-12">
          <div>
            <img
              src="/assets/skin-check.png"
              alt="Skin Check"
              className="rounded-lg shadow-lg max-w-sm w-full h-auto object-cover"
            />
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Bottom Section (same white bg to blend with right side) */}
      <div className="bg-white text-[#0B3D91] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            কেন আপনি এআই ডার্মাটোলজিস্ট ব্যবহার করবেন?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
            <ul className="space-y-4">
              <li>✔️ ৫৮+ ত্বকের রোগ শনাক্ত করতে সক্ষম, মেলানোমা এবং স্কিন ক্যান্সার সহ</li>
              <li>✔️ ৯৭%+ নির্ভুলতা, এআই এবং ক্লিনিকাল ডাটাবেসের উপর ভিত্তি করে</li>
              <li>✔️ ১ মিনিটের মধ্যে ফলাফল</li>
            </ul>
            <ul className="space-y-4">
              <li>✔️ তাৎক্ষণিক হোম স্ক্রিনিং সক্ষম</li>
              <li>✔️ ২৪/৭ ব্যক্তিগত এআই কনসালটেন্ট</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDermatologist;