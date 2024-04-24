import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import SentimentStats from "./SentimentStats";


const Piechart = ({ analyticsData }) => {



  console.log(analyticsData, "Piechart has responsedata");
  console.log(analyticsData.sentiment_by_date, "This is sentiment by date object")

  let data2 = null;
  if (analyticsData) {
    data2 = [
      { name: "Positive", value: analyticsData.positive },
      { name: "Negative", value: analyticsData.negative },
    ];
  }



  const COLORS = ["#206f62", "#d32f2f"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="40%">


        <>
          <PieChart width={300} height={260}>
            <Pie
              data={data2}
              cx="30%"
              cy="60%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={75}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              width={150}
              wrapperStyle={{
                top: 20,
                left: 280,
                backgroundColor: "#f5f5f5",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "20px",
              }}
            />
          </PieChart>
        </>

      <SentimentStats analyticsData={analyticsData} />
    </ResponsiveContainer>
  );
};

export default Piechart;
