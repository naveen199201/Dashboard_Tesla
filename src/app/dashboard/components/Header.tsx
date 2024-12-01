"use client";

import React from "react";

interface HeaderProps {
  onDownload: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownload }) => {
  return (
    <header className="flex justify-between items-center  ">
              <h1 className="font-bold text-black my-5 text-2xl">Reports</h1>
              <button
        onClick={onDownload}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download
      </button>
    </header>
  );
};

export default Header;
