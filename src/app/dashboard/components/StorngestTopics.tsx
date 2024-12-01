import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";
import ProgressBar from "./ProgressBar";

type StrongTopics = {
  name: string;
  image: string;
  correct_percentage: number;
};

type Topics = {
  strongest: StrongTopics[];
};

const StrongestTopics: React.FC = () => {
  const { data, loading, error } = useFetchJson<{ topics: Topics }>();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { topics } = data || {};
  return (
    <div className="m-3 p-3  ">
      <h1 className="text-gray-400 font-bold mb-3">Strongest Topics</h1>
      {topics?.strongest?.map((item, index) => (
        <div key={index} className="flex justify-items-center">
          <div className="w-1/12 py-6 ">
          <img src={item.image} alt="image" />
          </div>
          <div className="w-11/12 m-2">
            <h6 className="pl-3">{item.name}</h6>
            <div className="flex ">
              <span className="w-9/12 m-3 ">
                <ProgressBar
                  progress={item.correct_percentage}
                  color="bg-red-400"
                  bgcolor="bg-red-100"
                />
              </span>
              <span className="text-center pl-8 ">
                {item.correct_percentage}%{" "}
                <span className="text-gray-400">Correct</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrongestTopics;
