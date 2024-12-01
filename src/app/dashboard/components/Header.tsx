"use client";
import React from "react";

interface HeaderProps {
  onDownload: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownload }) => {
  return (
    <header className="flex justify-between items-center  ">
      <h1 className="font-bold text-black my-5 text-2xl">Reports</h1>
      <div className="flex items-center">
      <img src="Download.png" alt="download" className="w-7 h-6" />
      <button onClick={onDownload} className=" text-black  py-2 rounded">
        Download
      </button>
      </div>
    </header>
  );
};

export default Header;
