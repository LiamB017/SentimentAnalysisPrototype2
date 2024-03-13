
import React, { useState } from "react";
import { Button } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Timechart = ({ analyticsData, }) => {
  console.log("Timechart has analyticsData", analyticsData);

      const [showHourlyChart, setShowHourlyChart] = useState(true);

      const toggleView = () => {
        setShowHourlyChart(!showHourlyChart);
      };

  //  const seventeenthDates = responseData.commentsdatetime.filter(dateString => {
  //   const date = new Date(dateString);
  //   return date.getDate() === 17;
  //  });

  //  const eighteenthDates = responseData.commentsdatetime.filter(dateString => {
  //   const date = new Date(dateString);
  //   return date.getDate() === 18;
  //  }
  //   );
  //  const numberofSeventeenthDates = seventeenthDates.length;
  //  const numberofEighteenthDates = eighteenthDates.length;

  //  console.log("Number of 18th dates:", numberofSeventeenthDates)
  //  console.log("Number of 17th dates:", numberofEighteenthDates)

  const dateCounts = {};

  // Count the occurrences of each date

  analyticsData.commentsdatetime.forEach((dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`; // Format date as YYYY-MM-DD
    dateCounts[formattedDate] = (dateCounts[formattedDate] || 0) + 1;
  });

  // Log the counts for each date
  Object.keys(dateCounts).forEach((date) => {
    console.log(`${date}: ${dateCounts[date]} occurrences`);
  });

  const firstDate = String(Object.keys(dateCounts)[0]);

  console.log("First date:", firstDate);

  const secondDate = String(Object.keys(dateCounts)[1]);

  const thirdDate = String(Object.keys(dateCounts)[2]);

  console.log("this is first count", dateCounts[firstDate]);

  const firstDateCount = dateCounts[firstDate];

  const data = Object.keys(dateCounts).map((date) => ({
    name: date,
    commentCount: dateCounts[date],
  }));




  return (
    <>
      <Button
        onClick={toggleView}
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#20556f",
          color: "#fff",
          marginLeft: "465px",
          marginBottom: "10px",
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
        {showHourlyChart ? "Show Hourly Chart" : "Show Day Chart"}
      </Button>
      <LineChart
        width={660}
        height={500}
        data={data}
        margin={{
          top: 5,
          left: 140,
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
          dataKey="commentCount"
          stroke="#20556f"
          strokeWidth={7}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

  export default Timechart;
