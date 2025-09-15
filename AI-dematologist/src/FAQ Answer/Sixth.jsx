import React from "react";
import { useNavigate } from "react-router";

const Question6 = () => {
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
          How is Machine Learning used in the application?
        </h1>
        <p className="text-[#183B56] mb-4">
          We have trained the application algorithm with large quantities of images which were previously assessed by our team of dermatologists. The algorithm learns which lesions are dangerous and which ones are not. We continuously train and improve our algorithm with new sets of images.
        </p>
        <p className="text-[#183B56] mb-4">
          It is common for doctors to ask a second opinion, and so at this moment, every photo is also reviewed by our in-house dermatologists and image recognition experts. We have set up this process to assist the algorithm to become more accurate and to make sure that our dermatologists agree with the risk indication. The best part, however, is that we are training our algorithm to become on a par with the best dermatologists.
        </p>
        <p className="text-[#183B56]">
          Every photo of skin spots makes our algorithm smarter at detecting skin cancer risk.
        </p>
      </div>
    </div>
  );
};

export default Question6;