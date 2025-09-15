import React from "react";
import { useNavigate } from "react-router";

const diseases = [
  { key: "A", items: [
    { name: "একনি ভলগারিস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "অ্যাটোপিক ডার্মাটাইটিস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "B", items: [
    { name: "বিনাইন নেভাস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "ব্লু নেভাস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "C", items: [
    { name: "ক্লোজড কমেডোনস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "D", items: [
    { name: "ডার্মাটোফাইব্রোমা: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "ডার্মাটাইটিস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "ডিসপ্লাস্টিক নেভাস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "L", items: [
    { name: "লিচেন প্ল্যানাস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "লেন্টিগো: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "M", items: [
    { name: "মেলানোমা: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "S", items: [
    { name: "সেবোরিক কেরাটোসিস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "সেবোরিক ডার্মাটাইটিস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
    { name: "স্পিটজ নেভাস: কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]},
  { key: "T", items: [
    { name: "ট্রাইকোব্যাকটেরিওসিস (ট্রিকোমাইকোসিস): কারণ, উপসর্গ, এবং কখন ব্যবস্থা নিতে হবে" },
  ]}
];

export default function DiseaseDictionary() {
  const navigate = useNavigate();

  const handleDiseaseClick = (diseaseName, groupKey, idx) => {
    // Example: navigate(`/disease/${groupKey.toLowerCase()}-${idx + 1}`);
    navigate(`/disease/${groupKey.toLowerCase()}-${idx + 1}`);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FF] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#183B56]">রোগের অভিধান</h1>
          
        </div>

        {/* Diseases Grouped by Alphabet */}
        {diseases.map((group) => (
          <div key={group.key} className="mb-8">
            <h2 className="font-bold text-lg text-[#183B56] mb-4">{group.key}</h2>
            <div className="flex flex-col gap-3">
              {group.items.map((disease, idx) => (
                <button
                  key={idx}
                  className={`w-full bg-white flex justify-between items-center rounded-lg px-6 py-4 text-[#183B56] font-semibold text-base shadow-sm hover:bg-[#edf3fc] transition cursor-pointer
                    ${group.key === "M" && idx === 0 ? "border border-[#7cb3f7] bg-[#eaf4fe]" : ""}
                  `}
                  onClick={() => handleDiseaseClick(disease.name, group.key, idx)}
                >
                  <span>{disease.name}</span>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" stroke="#183B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}