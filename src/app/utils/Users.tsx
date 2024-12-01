import React, { useState } from "react";

type Group = "Managers" | "All Users" | "Trainers";

interface UserSelectorProps {
  groupData: Record<Group, string[]>; // Users mapped by group
  onSelectionChange: (selectedUsers: string[]) => void; // Callback for selected users
}

const Users: React.FC<UserSelectorProps> = ({ groupData, onSelectionChange }) => {
  const [selectedGroup, setSelectedGroup] = useState<Group>("Managers");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Handle group change
  const handleGroupChange = (group: Group) => {
    setSelectedGroup(group);
    setSelectedUsers([]); // Reset users when group changes
  };

  // Handle user selection
  const handleUserSelection = (user: string) => {
    const isSelected = selectedUsers.includes(user);
    const updatedUsers = isSelected
      ? selectedUsers.filter((u) => u !== user)
      : [...selectedUsers, user];
    setSelectedUsers(updatedUsers);
    onSelectionChange(updatedUsers);
  };

  // Handle removing a user from the selected list
  const removeUser = (user: string) => {
    const updatedUsers = selectedUsers.filter((u) => u !== user);
    setSelectedUsers(updatedUsers);
    onSelectionChange(updatedUsers);
  };

  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Select Users</h2>

      {/* Group Dropdown */}
      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">Select a Group:</p>
        <div className="flex flex-col gap-2">
          {(["Managers", "All Users", "Trainers"] as Group[]).map((group) => (
            <label key={group} className="flex items-center gap-2">
              <input
                type="radio"
                value={group}
                checked={selectedGroup === group}
                onChange={() => handleGroupChange(group)}
                className="form-radio text-blue-600"
              />
              {group}
            </label>
          ))}
        </div>
      </div>

      {/* Users Dropdown */}
      <div className="mb-4">
        <label htmlFor="users-dropdown" className="block text-sm font-semibold mb-2">
          Select Users:
        </label>
        <select
          id="users-dropdown"
          multiple
          value={selectedUsers}
          onChange={(e) => {
            const options = Array.from(e.target.selectedOptions, (option) => option.value);
            setSelectedUsers(options);
            onSelectionChange(options);
          }}
          className="w-full border rounded-md p-2"
        >
          {groupData[selectedGroup].map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Users */}
      <div className="mb-4">
        <p className="text-sm font-semibold">Selected Users:</p>
        <div className="flex flex-wrap gap-2">
          {selectedUsers.length > 0 ? (
            selectedUsers.map((user) => (
              <div
                key={user}
                className="flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full shadow-sm"
              >
                <span>{user}</span>
                <button
                  onClick={() => removeUser(user)}
                  className="text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No users selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
