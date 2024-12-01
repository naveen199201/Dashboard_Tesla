import React from "react";

interface SidebarProps {
  items: Array<{
    label: string;
    path: string;
  }>;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div>
      <img src="TESLA.png" className="w-[100px] h-[40px] m-auto p-3"></img>
      <ul className="justify-items-center">
        <li className="hover:bg-blue-200 px-10 m-2">Reports </li>
        <li>Library</li>
        <li>People</li>
        <li>Activities</li>
      </ul>
      <h4 className="text-center text-gray-400 font-bold">Support</h4>
      <ul className="justify-items-center">
        <li> Get Started</li>
        <li> Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
