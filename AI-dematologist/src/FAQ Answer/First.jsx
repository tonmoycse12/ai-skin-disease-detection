import React from "react";
import { useNavigate } from "react-router";

const Question1 = () => {
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
          অ্যাপ্লিকেশনটিতে মেশিন লার্নিং কীভাবে ব্যবহার করা হয়?
        </h1>
        <p className="text-[#183B56] mb-4">
আমরা প্রচুর পরিমাণে ছবি দিয়ে অ্যাপ্লিকেশন অ্যালগরিদমকে প্রশিক্ষণ দিয়েছি যা পূর্বে আমাদের চর্মরোগ বিশেষজ্ঞদের দল দ্বারা মূল্যায়ন করা হয়েছিল। অ্যালগরিদমটি শিখেছে যে কোন ক্ষতগুলি বিপজ্জনক এবং কোনগুলি নয়। আমরা ক্রমাগত নতুন ছবিগুলির সেট দিয়ে আমাদের অ্যালগরিদমকে প্রশিক্ষণ এবং উন্নত করি।        </p>
        <p className="text-[#183B56] mb-4">
ডাক্তারদের দ্বিতীয় মতামত জিজ্ঞাসা করা সাধারণ, এবং তাই এই মুহুর্তে, প্রতিটি ছবি আমাদের অভ্যন্তরীণ চর্মরোগ বিশেষজ্ঞ এবং চিত্র স্বীকৃতি বিশেষজ্ঞদের দ্বারাও পর্যালোচনা করা হয়। অ্যালগরিদমকে আরও সঠিক হতে এবং আমাদের চর্মরোগ বিশেষজ্ঞরা ঝুঁকি ইঙ্গিতের সাথে একমত তা নিশ্চিত করতে আমরা এই প্রক্রিয়াটি সেট আপ করেছি। তবে সবচেয়ে ভালো দিক হল আমরা আমাদের অ্যালগরিদমকে সেরা চর্মরোগ বিশেষজ্ঞদের সাথে সমকক্ষ হওয়ার জন্য প্রশিক্ষণ দিচ্ছি।        </p>
        <p className="text-[#183B56]">
ত্বকের দাগের প্রতিটি ছবি ত্বকের ক্যান্সারের ঝুঁকি সনাক্তকরণে আমাদের অ্যালগরিদমকে আরও স্মার্ট করে তোলে।        </p>
      </div>
    </div>
  );
};

export default Question1;