import React, { useState } from "react";
import FilterDropdown from "@/app/utils/FilterDropDown";
import PeopleFilter from "@/app/utils/PeopleFilter";

const DashboardFilter: React.FC = () => {
  const [filter, setFilter] = useState<"7 Days" | "Month" | "Custom">("7 Days");

  const handleFilterChange = (selectedFilter: "7 Days" | "Month" | "Custom") => {
    setFilter(selectedFilter);
    console.log(`Selected Filter: ${selectedFilter}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <FilterDropdown onFilterChange={handleFilterChange} />
      <div className="mt-6">
        
        {/* Add your data rendering logic here based on the selected filter */}
      </div>
      {/* <PeopleFilter/> */}
    </div>
  );
};

export default DashboardFilter;
