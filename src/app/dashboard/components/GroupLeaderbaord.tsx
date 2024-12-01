import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type GroupsLeaderboard = [
  {
    group_name: string;
    points_per_user: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  }
];

const GroupLeaderboard: React.FC = () => {
  const { data, loading, error } = useFetchJson<{
    groups_leaderboard: GroupsLeaderboard;
  }>();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { groups_leaderboard } = data || {};
  console.log(groups_leaderboard);
  const sortedLeaderboard = groups_leaderboard?.sort(
    (a, b) => b.accuracy_percentage - a.accuracy_percentage
  );

  const getArrow = (current: number, previous: number) => {
    if (current > previous) return <FontAwesomeIcon icon={faCaretUp} className="text-green-500"/>
    if (current < previous) return <FontAwesomeIcon icon={faCaretDown} className="text-red-500"/>
    return ""; // No change
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-md  mb-4 text-gray-500"> Groups Leaderboard</h2>
      <div className="">
        {sortedLeaderboard?.map((player, index) => {
          const changeArrow = getArrow(
            player.accuracy_percentage,
            player.previous_accuracy_percentage
          );
          return (
            <div
              key={player.group_name}
              className="flex justify-between items-center py-2 mb-3"
            >
              <div className="flex items-center">
                <div>
                  <span className="font-medium">{player.group_name}</span>
                  <div className="text-sm text-gray-500">
                    Points: {player.points} - {player.accuracy_percentage}%
                    Correct
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{index}</span>
                <span
                >
                  {changeArrow && (
                    <span className={`text-2xl`}>{changeArrow}</span>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GroupLeaderboard;
