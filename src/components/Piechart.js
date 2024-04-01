import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import SentimentStats from "./SentimentStats";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Piechart = ({ analyticsData }) => {


  const [showSecondChart, setShowSecondChart] = useState(false);
  console.log(analyticsData, "Piechart has responsedata");
  console.log(analyticsData.sentiment_by_date, "This is sentiment by date object")
  console.log("This is first date sentiment", analyticsData.sentiment_by_date['2024-03-20']['pos']);

  const posScoresByDate = [];   // Create an array to store the positive scores by date

  for (const [date, sentiment] of Object.entries(analyticsData.sentiment_by_date)) {
   console.log(date, sentiment);
   posScoresByDate.push(sentiment.pos);
  }

  console.log(posScoresByDate, "This is posScoresByDate");




  const handleClick = () => {
    setShowSecondChart((prevShowSecondChart) => !prevShowSecondChart);

    console.log("Button clicked");
  };

  let data = null;
if (analyticsData) {
  data = posScoresByDate.map((value, index) => ({
    name: `Day ${index + 1}`,
    value: Math.round(value * 100), // Multiply the positive score by 10
  }));
}


  let data2 = null;
  if (analyticsData) {
    data2 = [
      { name: "Positive", value: analyticsData.positive },
      { name: "Negative", value: analyticsData.negative },
    ];
  }

  console.log(data, "This is piechart data");

  const COLORS = ["#ade2b1", "#e80022", "#1c78ac"];

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
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          mx: 35,
          backgroundColor: "#20556f",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Adjusted shadow
          transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s", // Include box-shadow in transition
          "&:hover": {
            backgroundColor: "#163d4f",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)", // Adjusted shadow on hover
          },
        }}
      >
        {showSecondChart ? "Show Pos/Neg Chart" : "Show Neutral Chart"}
      </Button>
      {showSecondChart ? (

<LineChart
    width={660}
    height={500}
    data={data}
    margin={{
        top: 5,
        bottom: 5,
    }}
>
    <CartesianGrid strokeDasharray="4 4" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
        type="monotone"
        dataKey="value" // Corrected dataKey to match the key in the data
        stroke="#20556f"
        strokeWidth={7}
        activeDot={{ r: 8 }}
    />
</LineChart>

      ) : (
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
      )}
      <SentimentStats analyticsData={analyticsData} />
    </ResponsiveContainer>
  );
};

export default Piechart;
