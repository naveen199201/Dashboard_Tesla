import React from "react";
import Users from "./Users";

const PeopleFilter: React.FC = () => {
  const groupData = {
    Managers: ["Alice", "Bob", "Charlie"],
    "All Users": ["Alice", "Bob", "Charlie", "David", "Eve"],
    Trainers: ["David", "Eve"],
  };

  const handleSelectionChange = (selectedUsers: string[]) => {
    console.log("Selected Users:", selectedUsers);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Users groupData={groupData} onSelectionChange={handleSelectionChange} />
    </div>
  );
};

export default PeopleFilter;
