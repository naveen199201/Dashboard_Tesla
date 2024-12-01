import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";

type Metrics = {
  active_users: {
    current: number;
    total: number;
  };
  questions_answered: number;
  average_session_length_seconds: number;
  starting_knowledge_percentage: number;
  current_knowledge_percentage: number;
};

const Metrics: React.FC = () => {
  const { data, loading, error } = useFetchJson<{ metrics: Metrics }>();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const { metrics } = data || {};
  return (
    <div>
      <h1 className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-around">
        <span className="bg-white shadow-sm rounded-3xl p-5  h-48">
          <p className=" text-gray-600 mb-4">Active Users:</p>
          <p className="text-black text-3xl font-bold">
            {metrics?.active_users.current}
            <span className="text-gray-600 text-lg font-light">
              /{metrics?.active_users.total}{" "}
            </span>
          </p>
        </span>
        <span className="bg-white shadow-sm rounded-3xl p-5  h-48">
          <p className=" text-gray-600 mb-4">Questions Answered </p>
          <p className="text-black text-3xl font-bold">
            {metrics?.questions_answered}
          </p>
        </span>
        <span className="bg-white shadow-sm rounded-3xl p-5  h-48">
          <p className=" text-gray-600 mb-4">
          Av.Session Length </p><p className="text-black text-3xl font-bold">{metrics?.average_session_length_seconds}
          </p>
        </span>
        <span className="bg-white shadow-sm rounded-3xl p-5  h-48">
          <p className=" text-gray-600 mb-4">
          Starting Knowledge </p><p className="text-black text-3xl font-bold">{metrics?.starting_knowledge_percentage}%</p>
        </span>
        <span className="bg-white shadow rounded-3xl p-5  h-48">
          <p className=" text-gray-600 mb-4">
          Current Knowledge</p><p className="text-black text-3xl font-bold">{metrics?.current_knowledge_percentage}%</p>
        </span>
        <p className="bg-white shadow-sm rounded-3xl p-5  h-48"></p>
      </h1>
    </div>
  );
};
export default Metrics;
