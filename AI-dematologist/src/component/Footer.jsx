import React from "react";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#163A65] text-white pt-8 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Links */}
        <div className="flex flex-wrap gap-6 mb-4">
          <button className="underline hover:text-[#9bd1fa]" onClick={() => navigate("/")}>মূল পৃষ্ঠা</button>
          <button className="underline hover:text-[#9bd1fa]" onClick={() => navigate("/faq")}>প্রশ্নোত্তর</button>
          <button className="underline hover:text-[#9bd1fa]" onClick={() => navigate("/disease-list")}>রোগের অভিধান</button>
          <button className="underline hover:text-[#9bd1fa]" onClick={() => navigate("/privacy-policy")}>গোপনীয়তা নীতি</button>
          <button className="underline hover:text-[#9bd1fa]" onClick={() => navigate("/terms-of-use")}>ব্যবহারের শর্তাবলী</button>
          <button className="underline hover:text-[#9bd1fa]" onClick={() => navigate("/cancel-subscription")}>সাবস্ক্রিপশন বাতিল করুন</button>
        </div>
        {/* Info */}
        <div className="mb-2 text-sm">
          <span>
            এআই ডার্মাটোলজিস্ট রোগ নির্ণয়ের উদ্দেশ্যে নয়, বরং ব্যবহারকারীদের তিল চিহ্নিতকরণ, ট্র্যাকিং এবং আরও ভালোভাবে বোঝার সক্ষমতা দিতে ডিজাইন করা হয়েছে।
          </span>
        </div>
        <div className="mb-2 text-sm text-[#9bd1fa]">
          আমাদের এআই সিস্টেম নিয়ে কোনো প্রশ্ন থাকলে - ইমেইল করুন: <span className="font-bold text-white">support@ai-derm.com</span>
        </div>
        {/* Copyright & Social */}
        <div className="flex flex-wrap items-center justify-between mt-6">
          <span className="text-sm text-[#9bd1fa]">
            এআই ডার্মাটোলজিস্ট | সমস্ত অধিকার সংরক্ষিত। কপিরাইট © ২০২৫
          </span>
          <div className="flex gap-2 mt-2 md:mt-0">
            {/* Social icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border border-[#9bd1fa] rounded px-2 py-1 hover:bg-[#204d7a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h5v-7H9v-3h3V9a3 3 0 013-3h3v3h-3a1 1 0 00-1 1v2h4l-1 3h-3v7h4a5 5 0 005-5V7a5 5 0 00-5-5z" fill="#9bd1fa"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border border-[#9bd1fa] rounded px-2 py-1 hover:bg-[#204d7a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2V9zm2-6a2 2 0 110 4 2 2 0 010-4z" fill="#9bd1fa"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border border-[#9bd1fa] rounded px-2 py-1 hover:bg-[#204d7a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.05 9.05 0 01-2.88 1.1A4.48 4.48 0 003.13 9.04a12.94 12.94 0 01-9.4-4.77 4.48 4.48 0 001.39 6A4.41 4.41 0 012 14.24a4.52 4.52 0 01-2.03-.56v.06a4.48 4.48 0 003.6 4.4A4.52 4.52 0 012 18c.62 0 1.23-.06 1.82-.18a12.93 12.93 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0023 3z" fill="#9bd1fa"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border border-[#9bd1fa] rounded px-2 py-1 hover:bg-[#204d7a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3.2" fill="#9bd1fa"/><rect x="2" y="2" width="20" height="20" rx="5" stroke="#9bd1fa" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#9bd1fa"/></svg>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="border border-[#9bd1fa] rounded px-2 py-1 hover:bg-[#204d7a]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9.5 14.5l1.5 1.5 6.5-6.5M21 3L3 11.34v2.42l6.5 2.57L21 3z" stroke="#9bd1fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}