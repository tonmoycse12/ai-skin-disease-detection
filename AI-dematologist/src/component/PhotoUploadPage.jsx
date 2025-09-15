import React, { useRef } from "react";

export default function PhotoUploadPage() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file, e.g., show preview, upload, etc.
    const file = e.target.files[0];
    // Add your logic here
    alert("ফটো নির্বাচিত হয়েছে: " + file?.name);
  };

  return (
    <div className="max-w-lg mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold text-[#183B56] mb-2">চলুন শুরু করি!</h1>
      <p className="text-[#5A7184] mb-8">
        ছবি যোগ করুন স্ক্যান করার জন্য। আপনি ডিভাইস থেকে ছবি আপলোড করতে বা মোবাইলে ক্যামেরা দিয়ে ছবি তুলতে পারেন।
      </p>

      <button
        type="button"
        className="flex items-center justify-center bg-[#36C9CE] hover:bg-[#2bb4b9] text-white font-semibold rounded-lg w-full py-6 text-lg mb-6 transition cursor-pointer"
        onClick={handleUploadClick}
      >
        {/* Attachment icon */}
        <svg className="mr-2" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M18.364 5.636a5 5 0 010 7.071l-7.071 7.071a5 5 0 01-7.071-7.071l7.071-7.071a3 3 0 114.243 4.243l-7.071 7.071a1 1 0 101.414 1.414l7.071-7.071" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ফটো আপলোড করুন
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="bg-white border border-[#D5E2F3] rounded-lg px-6 py-4 flex items-start">
        <svg className="mt-1 mr-2 flex-shrink-0" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9" stroke="#3D8FF7" strokeWidth="2"/>
          <rect x="9" y="6" width="2" height="5" rx="1" fill="#3D8FF7"/>
          <rect x="9" y="13" width="2" height="2" rx="1" fill="#3D8FF7"/>
        </svg>
        <div>
          <span className="font-bold text-[#183B56]">টিপস:</span>
          <span className="text-[#5A7184] ml-1">
            আরও নিখুঁত ফলাফলের জন্য, ৩টি উচ্চ-মানের ছবি আপলোড করুন যাতে AI সহজে আক্রান্ত ত্বকের অংশ বিশ্লেষণ করতে পারে।
          </span>
        </div>
      </div>
    </div>
  );
}