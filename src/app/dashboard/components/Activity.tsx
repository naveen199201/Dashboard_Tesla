import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";
import ActivityChart from "./ActivityChart";

type MonthlyActivity = {
  month: string;
  value: number;
};

type Activity = {
  monthly: MonthlyActivity[];
};

const Activity: React.FC = () => {
  const { data, loading, error } = useFetchJson<{ activity: Activity }>();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { activity } = data || {};
  return (
    <div className="">
      <ActivityChart activity={activity} />
    </div>
  );
};
export default Activity;
