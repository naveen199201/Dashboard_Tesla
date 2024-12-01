import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useFetchJson } from "../hooks/useFetchJson";

// Register necessary components
ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

type MonthlyActivity = {
  month: string;
  value: number;
};

type Activity = {
  monthly: MonthlyActivity[];
};

const ActivityChart: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");

  const { data, loading, error } = useFetchJson<{ activity: Activity }>();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const {activity} = data || {};


  // Filtered data based on month
  
  const filteredData =
    selectedMonth === "All"
      ? activity?.monthly || []
      : activity?.monthly?.filter((item) => item.month === selectedMonth) || [];
  console.log(filteredData)
  const maxValue = Math.max(...filteredData.map((item) => item.value));
  const remainingProgress = filteredData.map((item) => maxValue - item.value);

  // Chart data
  const chartData = {
    labels: filteredData.map((item) => item.month),
    datasets: [
      {
        label: "Activity Progress",
        data: filteredData.map((item) => item.value),
        backgroundColor: "rgba(0, 123, 255, 1)", // Blue for filled portion
        borderColor: "rgba(0, 123, 255, 0.8)",
        borderWidth: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
        barThickness: 10, // Adjust the width of each bar
        stack: "stacked",
      },
      {
        label: "Remaining Progress",
        data: remainingProgress, // Remaining part of the bar
        backgroundColor: "rgba(242, 247, 255, 1)",
        borderColor: "transparent",
        borderWidth: 1,
        barThickness: 10, // Adjust the width of each bar
        stack: "stacked",
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 5,
      },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      },
    },
    scales: {
      y: {
        grid: {
          display: false, // Display grid lines for the y-axis
        },
        ticks: {
          display: true, // Display tick labels on x-axis
          beginAtZero: true,
          max: maxValue,
        },
        border: {
          display: false, // Hide x-axis line
        },
      },
      x: {
        grid: {
          display: false, // Display grid lines for the y-axis
        },
        ticks: {
          display: true, // Display tick labels on x-axis
          beginAtZero: true,
          max: maxValue,
        },
        border: {
          display: false, // Hide x-axis line
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 40,
        borderWidth: 0.7,
      },
    },
  };

  return (
    <div  className="p-6 w-[700px] items-end">
      <div style={{ minWidth: 120 }}>
        <label id="month-select-label">Month</label>
        <select
          id="month-select-label"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="All">All</option>
          {filteredData.map((item) => (
            <option key={item.month} value={item.month}>
              {item.month}
            </option>
          ))}
        </select>
      </div>

      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ActivityChart;
