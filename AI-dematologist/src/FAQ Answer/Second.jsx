import React from "react";
import { useNavigate } from "react-router";

const Question2 = () => {
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
        একজন AI ডার্মাটোলজিস্ট কী?
        </h1>
        <p className="text-[#183B56] mb-4">
AI ডার্মাটোলজিস্ট হলেন স্কিনকেয়ার AI-সহকারী, যা গভীর শিক্ষা এবং কম্পিউটার দৃষ্টি প্রযুক্তি এবং চিকিৎসা অভিজ্ঞতার উপর ভিত্তি করে তৈরি।        </p>
        <p className="text-[#183B56] mb-4">
AI ডার্মাটোলজিস্ট আপনাকে 30 সেকেন্ডের মধ্যে ত্বকের ক্যান্সারের লক্ষণগুলির জন্য আপনার ত্বকের দাগ পরীক্ষা করতে সক্ষম করে। আমাদের অ্যালগরিদম বর্তমানে একজন বিশেষজ্ঞ চর্মরোগ বিশেষজ্ঞের স্তরে রয়েছে এবং আমরা এটি উন্নত করতে থাকি। সম্ভাব্য স্বাস্থ্য ঝুঁকিপূর্ণ ত্বকের দাগের ক্ষেত্রে, AI ডার্মাটোলজিস্ট পরবর্তী পদক্ষেপ সম্পর্কে প্রতিক্রিয়া প্রদান করেন।        </p>
        <p className="text-[#183B56]">
AI ডার্মাটোলজিস্ট আপনাকে সময়ের সাথে সাথে পরিবর্তনগুলি ট্র্যাক রাখতে ফটো সংরক্ষণ করতে সক্ষম করে, যা আপনাকে দীর্ঘমেয়াদে আপনার স্বাস্থ্য পর্যবেক্ষণ করতে সহায়তা করে। দক্ষ এবং সহজেই ব্যবহারযোগ্য চ্যাট-বট সমাধান টেলিগ্রাম এবং ফেসবুক মেসেঞ্জারের জন্য উপলব্ধ এবং ত্বক পর্যবেক্ষণকে একটি সহজ রুটিন করতে সহায়তা করে।        </p>
      </div>
    </div>
  );
};

export default Question2;