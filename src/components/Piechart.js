import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import SentimentStats from "./SentimentStats";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Piechart = ({ analyticsData }) => {
  const [showSecondChart, setShowSecondChart] = useState(false);
  console.log(analyticsData, "Piechart has responsedata");

  const handleClick = () => {
    setShowSecondChart((prevShowSecondChart) => !prevShowSecondChart);

    console.log("Button clicked");
  };

  let data = null;
  if (analyticsData) {
    data = [
      { name: "Positive", value: analyticsData.positive },
      { name: "Negative", value: analyticsData.negative },
      { name: "Neutral", value: analyticsData.neutral },
    ];
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
        {showSecondChart ? "Show Neutral Chart" : "Show Pos/Neg Chart"}

      </Button>
      {showSecondChart ? (
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="12%"
            cy="80%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={75}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
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
