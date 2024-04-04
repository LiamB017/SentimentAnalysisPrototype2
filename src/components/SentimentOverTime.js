import React from "react";
import { useState } from "react";
import SentimentStats from "./SentimentStats";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Cell, ResponsiveContainer, Legend } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


const SentimentOvertime = ({ analyticsData }) => {

  console.log(analyticsData, "SentimentOvertime has responseData");


const posScoresByDate = []; // Create an array to store the positive scores by date

for (const [date, sentiment] of Object.entries(
  analyticsData.sentiment_by_date
)) {
  console.log(date, sentiment);
  posScoresByDate.push(sentiment.pos);
}

const scoresByDate = []; // Create an array to store the scores by date

for (const [date, sentiment] of Object.entries(
  analyticsData.sentiment_by_date
)) {
  console.log(date, sentiment);
  scoresByDate.push(sentiment);
}

console.log(scoresByDate, "This is scoresByDate");

const negScoresByDate = []; // Create an array to store the negative scores by date

for (const [date, sentiment] of Object.entries(
  analyticsData.sentiment_by_date
)) {
  console.log(date, sentiment);
  negScoresByDate.push(sentiment.neg);
}

console.log(posScoresByDate, "This is posScoresByDate");
console.log(negScoresByDate, "This is negScoresByDate");

  let data = null;
  if (analyticsData) {
    // Map the positive scores by date to the data format required by Recharts
     data = Object.entries(analyticsData.sentiment_by_date).map(
       ([date, sentiment], index) => ({
         name: `Day ${index + 1}`,
         positiveValue: Math.round(sentiment.pos * 100), // Round the positive value to the nearest integer
         negativeValue: Math.round(sentiment.neg * 100), // Round the negative value to the nearest integer
       })
     );

  }


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={660}
        height={500}
        data={data}
        margin={{
          top: 5,
          bottom: 5,
          right: 60,
        }}
      >
        <text
          x={330}
          y={20}
          textAnchor="middle"
          fontSize="20px"
          fill="#20556f"
          fontWeight="bold"
        >
          Positive and Negative Sentiment Scores Over Time
        </text>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="positiveValue"
          stroke="#206f62"
          strokeWidth={7}
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="negativeValue"
          stroke="#d32f2f"
          strokeWidth={7}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );


};


export default SentimentOvertime;
