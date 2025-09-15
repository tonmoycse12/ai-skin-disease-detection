import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#003366] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 text-white">
        <div className="font-bold text-lg cursor-pointer" onClick={() => navigate("/")}>
          ত্বক পরীক্ষাকরণ 
        </div>
        <ul className="flex space-x-6">
          <li
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/faq")} // এখানে আপনার FAQ route দিন
          >
            প্রশ্নোত্তর
          </li>
          <li
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => navigate("/disease-list")} // এখানে আপনার রোগের তালিকা route দিন
          >
            রোগের তালিকা
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;