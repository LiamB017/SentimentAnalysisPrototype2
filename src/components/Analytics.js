import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Piechart from "./Piechart";
import { useState } from "react";

const Analytics = (responseData) => {


 console.log(responseData, "Analytics has responsedata");

  return (
    <>
      <h1>Analytics</h1>
      <Piechart responseData={responseData} />
    </>
  );
};

export default Analytics;
