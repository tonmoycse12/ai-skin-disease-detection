// src/pages/AIDermatologistReview.jsx
import React from "react";
import { Star } from "lucide-react";

const AIDermatologistReview = () => {
  return (
    <div className="w-full bg-white text-[#0B3D91] font-sans">
      {/* Review Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
          আমাদের ৮৪% ব্যবহারকারী এআই ডার্মাটোলজিস্টকে সহায়ক বলে মনে করেন।
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3">Thewildherbalist</h3>
            <p className="text-gray-700 mb-4">
              যা পরে আমার চিকিৎসক দ্বারা নিশ্চিত হয়েছিল! এই প্রযুক্তি তৈরির জন্য ধন্যবাদ।
            </p>
            <div className="flex text-yellow-500">
              {Array(5).fill().map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500" />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3">Lindsey</h3>
            <p className="text-gray-700 mb-4">
              এই মাসে ত্বকের ক্যান্সার সঠিকভাবে শনাক্ত করেছে এবং সম্ভবত আমার জীবন বাঁচিয়েছে। 
              বায়োপসি দেখিয়েছে এই অ্যাপ ১০০% সঠিক। আমি সবাইকে এই অ্যাপ ব্যবহারের সুপারিশ করছি।
            </p>
            <div className="flex text-yellow-500">
              {Array(5).fill().map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Worth Using Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          কেন এআই ডার্মাটোলজিস্ট ব্যবহার করবেন?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img src="/assets/smart.png" alt="Smart" className="h-16 mb-4" />
            <h3 className="font-semibold text-lg mb-2">স্মার্ট</h3>
            <p className="text-gray-600 text-sm">
              কৃত্রিম বুদ্ধিমত্তার উপর ভিত্তি করে তৈরি, 
              আইটি বিশেষজ্ঞ ও ডাক্তারদের যৌথ কাজের ফল। 
              আমাদের অ্যাপ একজন বিশেষজ্ঞ চর্মরোগ বিশেষজ্ঞের মতোই নির্ভুল।
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img src="/assets/simple.png" alt="Simple" className="h-16 mb-4" />
            <h3 className="font-semibold text-lg mb-2">সহজ</h3>
            <p className="text-gray-600 text-sm">
              শুধু ফোনটি ত্বকের তিল বা দাগের কাছে ধরুন, 
              ১ মিনিটের মধ্যেই জানতে পারবেন উদ্বেগের কারণ আছে কি না।
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img src="/assets/accessible.png" alt="Accessible" className="h-16 mb-4" />
            <h3 className="font-semibold text-lg mb-2">সবার জন্য</h3>
            <p className="text-gray-600 text-sm">
              যেকোনো সময়, যেকোনো জায়গা থেকে ব্যবহারযোগ্য। 
              আপনি ভ্রমণে থাকলেও আপনার স্বাস্থ্যের খেয়াল রাখতে পারবেন।
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img src="/assets/affordable.png" alt="Affordable" className="h-16 mb-4" />
            <h3 className="font-semibold text-lg mb-2">সাশ্রয়ী</h3>
            <p className="text-gray-600 text-sm">
              সর্বাধুনিক ইমেজ অ্যানালাইটিক্স খুবই কম খরচে। 
              কাস্টমাইজেবল প্যাকেজ ও পরিকল্পনা আপনার সময় ও অর্থ সাশ্রয় করবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDermatologistReview;
