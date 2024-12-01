import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  items: Array<{
    label: string;
    path: string;
  }>;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full">
    <div className="">
      <img src="TESLA.png" className="w-30 h-10 p-3 my-8 mx-16 "></img>
      <ul className=" ml-20">
        <div className="flex items-center">
        <FontAwesomeIcon icon={faArrowTrendUp}  className="w-10 h-8 mr-3 p-1"/>
        <li className="hover:bg-blue-200 ">Reports </li>
        </div>
        <div className="flex text-lg my-5 items-center">
          <img src="quiz.png" alt="quiz" className="w-30 h-10 mr-3" />
          <li className="text-center">Library</li>
        </div>
        <div className="flex text-lg my-5 items-center justify-items-start">
          <img src="People.png" alt="quiz" className="w-30 h-10 mr-3" />
          <li>People</li>
        </div>
        <div className="flex text-lg my-5 items-center">
          <img src="Assignments.png" alt="quiz" className="w-30 h-10 mr-3" />
          <li>Activities</li>
        </div>
      </ul>
      <h4 className=" text-gray-400 text-lg  ml-20 pl-2">Support</h4>
      <ul className=" ml-20">
        <div className="flex text-lg my-5 items-center">
          <img src="Bulb.png" alt="quiz" className="w-30 h-10 mr-3" />
          <li> Get Started</li>
        </div>
        <div className="flex text-lg my-5 items-center">
          <img src="Settings.png" alt="quiz" className="w-30 h-10 mr-3" />
          <li> Settings</li>
        </div>
      </ul>
      </div>
      <div>
      <hr />
      <div className=" ml-10 mb-3">
      
      <FontAwesomeIcon icon={faUserCircle} size="2x" color="#007BFF"  className="p-1"/>
       <p className="p-1">Naveen Vasamsetti</p>
       <p className="p-1"> naveen199201@gmail.com</p>
        {/* </div> */}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
