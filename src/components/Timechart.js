import React  from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area } from "recharts";

const Timechart = ({ responseData }) => {
  console.log("Timechart has responsedata", responseData);

const timeRangeData = [
  {
    start: new Date("Mon, 05 Feb 2024 16:23:59 GMT"),
    end: new Date("Mon, 06 Feb 2024 17:17:02 GMT"),
  },
  // Add more time range entries as needed
];


  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={timeRangeData}>
        <XAxis
          dataKey="start"
          type="number"
          scale="time"
          domain={["auto", "auto"]}
        />
        <YAxis />
        <Area
          type="linear"
          dataKey="end"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

  export default Timechart;
