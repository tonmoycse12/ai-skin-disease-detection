import React from "react";
import { Camera, Cpu, FileText, Bot } from "lucide-react";

const CheckYourSkin = () => {
  return (
    <section className="bg-[#004080] text-white min-h-screen flex items-center  px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">আপনার ত্বক পরীক্ষা করুন!</h1>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-center space-x-4">
              <span className="bg-white text-[#004080] font-bold px-3 py-1 rounded-full">ধাপ ১</span>
              <Camera className="text-yellow-400 w-6 h-6" />
              <p>ত্বকের সমস্যার একটি ছবি তুলুন</p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center space-x-4">
              <span className="bg-white text-[#004080] font-bold px-3 py-1 rounded-full">ধাপ ২</span>
              <Cpu className="text-green-400 w-6 h-6" />
              <p>এআই সঙ্গে সঙ্গে আপনার ছবিটি বিশ্লেষণ করবে</p>
            </div>
            {/* Step 3 */}
            <div className="flex items-center space-x-4">
              <span className="bg-white text-[#004080] font-bold px-3 py-1 rounded-full">ধাপ ৩</span>
              <FileText className="text-blue-400 w-6 h-6" />
              <p>ব্যক্তিগতকৃত পিডিএফ রিপোর্ট পান</p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center space-x-4">
              <span className="bg-white text-[#004080] font-bold px-3 py-1 rounded-full">ধাপ ৪</span>
              <Bot className="text-pink-400 w-6 h-6" />
              <p>এআই কনসালট্যান্ট আপনার ফলাফল ব্যাখ্যা করবে</p>
            </div>
          </div>
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            এখনই ফলাফল দেখুন
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/assets/woman-back.jpg"
            alt="Skin Check"
            className="rounded-lg shadow-lg w-[400px] h-[400px] object-cover bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default CheckYourSkin;
