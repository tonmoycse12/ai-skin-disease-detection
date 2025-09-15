import React from "react";
import { useNavigate } from "react-router"; // <-- ঠিক router import

const questions = [
  "অ্যাপে মেশিন লার্নিং কীভাবে ব্যবহার করা হয়?",
  "এআই ডার্মাটোলজিস্ট কী?",
  "কে এআই ডার্মাটোলজিস্ট ব্যবহার করবেন?",
  "এআই ডার্মাটোলজিস্ট কি ডাক্তারকে প্রতিস্থাপন করে?",
  "আমার ব্যক্তিগত তথ্য কি নিরাপদ?",
  "সাবস্ক্রিপশন বাতিল করতে চাইলে কীভাবে করবেন: ধাপে ধাপে গাইড",
  "ফলাফল কীভাবে সংরক্ষণ করবেন",
  "অ্যাক্টিনিক কেরাটোসিস: কারণ, উপসর্গ এবং কখন ব্যবস্থা নিতে হবে"
];

export default function FAQ() {
  const navigate = useNavigate();

  const handleQuestionClick = (index) => {
    navigate(`/faq/question-${index + 1}`); // <-- আগে slash দিন!
  };

  return (
    <div className="min-h-screen bg-[#F5F9FF] px-4 py-8">
      <div className="max-w-xl mx-auto">
        <button
          className="flex items-center  text-base mb-6 gap-1 bg-blue-500 px-5 py-3 rounded-sm cursor-pointer text-white"
          onClick={() => navigate(-1)}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24 " className="">
            <path d="M15 6l-6 6 6 6" stroke="#183B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>পেছনে যান</span>
        </button>
        <h1 className="text-2xl font-bold text-[#183B56] mb-8">FAQ</h1>
        <div className="flex flex-col gap-4">
          {questions.map((q, idx) => (
            <button
              key={idx}
              className="w-full bg-white flex justify-between items-center rounded-lg px-6 py-4 text-[#183B56] font-semibold text-base shadow-sm hover:bg-[#edf3fc] transition cursor-pointer"
              onClick={() => handleQuestionClick(idx)}
            >
              <span>{q}</span>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" stroke="#183B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}