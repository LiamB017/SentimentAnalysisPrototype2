import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const Barchart = ({ responseData }) => {
  console.log("Barchart has responsedata", responseData);

  const data = [
    {
      name: "Page A",
      uv: responseData.commentsdatetime[0],
    },

    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },

  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

  export default Barchart;
