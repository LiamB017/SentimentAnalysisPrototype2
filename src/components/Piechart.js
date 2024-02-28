import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import SentimentStats from "./SentimentStats";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Piechart = ({ responseData }) => {
   const [showSecondChart, setShowSecondChart] = useState(false);
  console.log(responseData, "Piechart has responsedata");

  const handleClick = () => {
     setShowSecondChart((prevShowSecondChart) => !prevShowSecondChart);

    console.log("Button clicked");
  };

  let data = null;
  if (responseData) {
    data = [
      { name: "Positive", value: responseData.positive },
      { name: "Negative", value: responseData.negative },
      { name: "Neutral", value: responseData.neutral },
    ];
  }

  let data2 = null;
   if (responseData) {
     data2 = [
       { name: "Positive", value: responseData.positive },
       { name: "Negative", value: responseData.negative }
     ];
   }

  console.log(data, "This is piechart data")

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
    <ResponsiveContainer width="40%" height="40%">
      <Button
        type="submit"
        variant="contained"
        sx={{
          mx: 38,
          backgroundColor: "#20556f",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s, color 0.3s",
          "&:hover": {
            backgroundColor: "#163d4f",
          },
        }}
        onClick={handleClick}
      >
        {showSecondChart ? <p>Pos/Neg Chart</p> : <p>Neutral Chart</p>}
      </Button>
      {showSecondChart ? (
        <PieChart width={400} height={450}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
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
          <PieChart width={330} height={260}>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
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
      <SentimentStats responseData={responseData} />
    </ResponsiveContainer>
  );
};

export default Piechart;
