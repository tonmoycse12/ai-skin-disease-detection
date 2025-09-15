import React from "react";
import { useNavigate } from "react-router";

export default function MelanomaDetails() {
  const navigate = useNavigate();

  const handleCheckSkin = () => {
    navigate("/upload");
  };

  return (
    <div className="min-h-screen bg-[#F5F9FF] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button
          className="flex items-center text-base mb-6 gap-1 bg-blue-500 px-5 py-3 rounded-sm text-white"
          onClick={() => navigate("/disease-list")}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24 ">
            <path d="M15 6l-6 6 6 6" stroke="#183B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>← অভিধানে ফিরে যান</span>
        </button>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#183B56] mb-6">
          মেলানোমা: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে
        </h1>
        {/* Description */}
        <p className="text-[#183B56] mb-4">
          মেলানোমা হলো ত্বকের ক্যান্সারের সবচেয়ে বিপজ্জনক ধরন, যা মেলানোসাইট থেকে উৎপন্ন হয় — ত্বকের রঙের কোষ। এটি যদিও সমস্ত স্কিন ক্যান্সারের মধ্যে ছোট অংশ, কিন্তু অধিকাংশ স্কিন ক্যান্সার-সম্পর্কিত মৃত্যুর কারণ মেলানোমা। দ্রুত শনাক্ত করা গুরুত্বপূর্ণ, কারণ এটি দ্রুত ছড়িয়ে পড়তে পারে যদি সময়মত চিকিৎসা না হয়।
        </p>
        <p className="text-[#183B56] mb-4">
          কীভাবে চেনা যাবে, তা জানা জীবন বাঁচাতে সাহায্য করতে পারে।
        </p>

        {/* How it looks */}
        <div className="mb-4">
          <b>কীভাবে দেখতে পারে</b>
          <ul className="list-disc pl-5 text-[#183B56]">
            <li>টেক্সচার: সাধারণত মসৃণ, তবে উন্নত স্তরে আলসার হয়ে যেতে পারে</li>
            <li>রং: সাধারণত কালো বা বাদামী, তবে গোলাপি, লাল, বেগুনি, বা চামড়ার রঙও হতে পারে</li>
            <li>আকৃতি: অনিয়মিত বর্ডার, অসম আকৃতি</li>
            <li>অবস্থান: সাধারণত পিঠে (পুরুষদের), পায়ে (নারীদের), রোদে বেশি পড়া অংশে, তবে যেকোনো জায়গায় হতে পারে</li>
          </ul>
        </div>
        <p className="text-[#183B56] mb-4">
          মেলানোমা পুরাতন তিল বা নতুন কোনো দাগ থেকে হতে পারে। "ABCDE" নিয়মটি সতর্কতার লক্ষণ চিহ্নিত করতে সাহায্য করে।
        </p>

        {/* Second Section */}
        <div className="bg-white rounded-lg shadow-sm px-5 py-6 mt-8">
          <b>সারাংশ</b>
          <ul className="list-disc pl-5 text-[#183B56] mb-4">
            <li>মেলানোমা সবচেয়ে বিপজ্জনক স্কিন ক্যান্সার, দ্রুত ছড়াতে পারে যদি সময়মত ধরা না পড়ে</li>
            <li>অসমতা, রঙের পরিবর্তন, নতুন বা পরিবর্তিত তিল খেয়াল করুন</li>
            <li>UV রশ্মি, জেনেটিক্স, স্কিন টাইপ - সবই ঝুঁকি বাড়ায়</li>
            <li>শুরুতেই পরীক্ষার গুরুত্ব — অজানা বা অস্বাভাবিক দাগ উপেক্ষা করবেন না</li>
          </ul>
          <div className="mb-3 text-sm text-[#183B56]">
            <span className="font-semibold">তথ্যসূত্র:</span> ESMO Living Guideline: Cutaneous Melanoma, v1.0, February 2025.<br />
            ইউরোপিয়ান সোসাইটি ফর মেডিক্যাল অনকোলজি (ESMO)। <br />
            <a className="text-blue-600 underline" 
              href="https://www.esmo.org/guidelines/living-guidelines/esmo-living-guideline-cutaneous-melanoma"
              target="_blank" rel="noopener noreferrer"
            >
              https://www.esmo.org/guidelines/living-guidelines/esmo-living-guideline-cutaneous-melanoma
            </a>
          </div>
          {/* Disclaimer */}
          <div className="bg-orange-100 border-l-4 border-orange-400 text-gray-700 p-4 mt-4 rounded-md flex items-start gap-2">
            <span>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#AA6B2A" strokeWidth="2"/>
                <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#AA6B2A">i</text>
              </svg>
            </span>
            <div>
              <b>ডিসক্লেইমার</b><br />
              এই তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে, চিকিৎসা পরামর্শ নয়। সঠিক ডায়াগনোসিস ও চিকিৎসার জন্য স্বাস্থ্য বিশেষজ্ঞের পরামর্শ নিন।
            </div>
          </div>
          {/* Button */}
          <button
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold rounded-full py-4 text-base transition cursor-pointer"
            onClick={handleCheckSkin}
          >
            এখনই আপনার ত্বক পরীক্ষা করুন
          </button>
        </div>
      </div>
    </div>
  );
}