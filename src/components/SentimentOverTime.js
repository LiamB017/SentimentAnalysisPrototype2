import React from "react";
import { useState } from "react";
import SentimentStats from "./SentimentStats";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
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
    <>
      <Typography
        variant="h5"
        style={{
          color: "#20556f",
          marginLeft: "60px",
          marginTop: "2px",
          fontWeight: "bold", // Use fontWeight instead of weight
        }}
      >
        Positive and Negative Sentiment Over Time
      </Typography>

      <LineChart
        width={660}
        height={500}
        data={data}
        margin={{
          top: 20, // Adjusted top margin to make space for the text
          bottom: 5,
          right: 60,
        }}
      >
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
    </>
  );
};

export default SentimentOvertime;
