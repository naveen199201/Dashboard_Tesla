import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

type UserLeaderboardData = [
  {
    name: string;
    image: string;
    points: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  }
];

const UserLeaderboard: React.FC = () => {
  const { data, loading, error } = useFetchJson<{
    user_leaderboard: UserLeaderboardData;
  }>();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { user_leaderboard } = data || {};
  console.log(user_leaderboard);
  const sortedLeaderboard = [...(user_leaderboard as unknown[])].sort(
    (a, b) => b.accuracy_percentage - a.accuracy_percentage
  );


  const getArrow = (current:number, previous:number) => {
    if (current > previous) return <FontAwesomeIcon icon={faCaretUp} className="text-green-500"/>
    if (current < previous) return <FontAwesomeIcon icon={faCaretDown} className="text-red-500"/>
    return ""; // No change
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-md  mb-4 text-gray-500">User Leaderboard</h2>
      <div className="">
        {sortedLeaderboard.map((player:UserLeaderboardData, index:number) => {
          const changeArrow = getArrow(
            player.accuracy_percentage,
            player.previous_accuracy_percentage
          );
          return (
            <div
              key={player.name}
              className="flex justify-between items-center py-2 mb-3 "
            >
              <div className="flex items-center">
                <Image
                  src={player.image}
                  alt={player.name}
                  className="w-8 h-8 rounded-full mr-3"
                  
                />
                <div>
                  <span className="font-medium">{player.name}</span>
                  <div className="text-sm text-gray-500">
                    Points: {player.points} - {player.accuracy_percentage}%
                    Correct
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{index+1}</span>
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

export default UserLeaderboard;
