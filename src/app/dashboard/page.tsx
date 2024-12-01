"use client";
import React from "react";
import Header from "./components/Header";
import axios from "axios";
import Sidebar from "./components/SideBar";
import DashboardFilter from "./components/DashboardFilter";
import StrongestTopics from "./components/StorngestTopics";
import WeakTopics from "./components/WeakTopics";
import UserLeaderboard from "./components/UserLeaderboard";
import GroupLeaderboard from "./components/GroupLeaderbaord";
import Metrics from "./components/Metrics";
import { useFetchJson } from "./hooks/useFetchJson";
import Activity from "./components/Activity";

const DashboardPage: React.FC = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("data");
  //     const response = await fetch("/data.json");
  //     console.log(response);
  //     const jsonData = await response.json();
  //     setData(jsonData?.activity?.monthly);
  //     setMonthlyData(jsonData?.activity?.monthly)
  //   };
  //   fetchData();
  // }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch("/data.json");

      const jsonData = await response.json();
      const { api_secret } = jsonData;

      const apiResponse = await axios.post(
        "https://testd5-img.azurewebsites.net/api/imgdownload",
        { api: api_secret }
      );

      const base64Image = apiResponse.data.image;
      const link = document.createElement("a");
      link.href = `data:image/png;base64,${base64Image}`;
      link.download = "dashboard-image.png";
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-">
        <div className="flex bg-[#f9f9f9]">
          <div className=" w-2/12 h-[100vh]  sticky top-0 bg-white shadow-lg rounded-3xl overflow-hidden">
            <Sidebar />
          </div>
          <div className="w-10/12 -500 px-5 ">
            <div>
              <Header onDownload={handleDownload} />
            </div>
            <div className="px-5">
              <DashboardFilter />
              <div className="flex ">
                <div className="w-1/2 m-4  overflow-hidden">
                  <Metrics />
                </div>
                <div className="w-1/2 m-4 bg-white shadow-lg rounded-2xl overflow-hidden">
                  <Activity />
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 m-4 bg-white shadow-lg rounded-2xl overflow-hidden">
                  <StrongestTopics />
                </div>
                <div className="w-1/2 m-4 bg-white shadow-lg rounded-2xl overflow-hidden">
                  <WeakTopics />
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 m-4  bg-white shadow-lg rounded-2xl overflow-hidden">
                  <UserLeaderboard />
                </div>
                <div className="w-1/2 m-4  bg-white shadow-lg rounded-2xl overflow-hidden">
                  <GroupLeaderboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
