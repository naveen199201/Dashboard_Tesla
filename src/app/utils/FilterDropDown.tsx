import React, { useState } from "react";

type FilterOption = "7 Days" | "Month" | "Custom";

interface FilterDropdownProps {
  onFilterChange: (filter: FilterOption) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("7 Days");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (filter: FilterOption) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
      >
        Timeframes:{selectedFilter}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {(["7 Days", "Month", "Custom"] as FilterOption[]).map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`${
                  selectedFilter === filter ? "bg-gray-100" : ""
                } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
