import React from "react";

interface DataCardProps {
  title: string;
  value: string | number;
}

const DataCard: React.FC<DataCardProps> = ({ title, value }) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default DataCard;
