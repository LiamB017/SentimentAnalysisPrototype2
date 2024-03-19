
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

  const hourlyCounts = {};

  // Count the occurrences of each date

  analyticsData.commentsdatetime.forEach((dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`; // Format date as YYYY-MM-DD
    dateCounts[formattedDate] = (dateCounts[formattedDate] || 0) + 1;
  });

  analyticsData.commentsdatetime.forEach((dateString) => {
    const date = new Date(dateString);
    const formattedHour = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}`; // Format date as YYYY-MM-DD HH
    hourlyCounts[formattedHour] = (hourlyCounts[formattedHour] || 0) + 1;
  });

  Object.keys(hourlyCounts).forEach((date) => {
    console.log(`${date}: ${hourlyCounts[date]} occurrences`);
  });


  // Log the counts for each date
  Object.keys(dateCounts).forEach((date) => {
    console.log(`${date}: ${dateCounts[date]} occurrences`);
  });

  Object.keys(hourlyCounts).forEach((hour) => {
    console.log("Hourly logs",`${hour}: ${hourlyCounts[hour]} occurrences`);
  });

  console.log(Object.keys(hourlyCounts).length);

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


  const hourlyData = Object.keys(hourlyCounts).map((hour) => ({

    name: hour,
    commentCount: hourlyCounts[hour],
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
          marginLeft: "335px",
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
        {showHourlyChart ? "Show Daily User Engagement Chart" : "Show Hourly User Engagement Chart"}
      </Button>

      {showHourlyChart === false && (
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
      )}
      {showHourlyChart && (
        <LineChart
          width={660}
          height={500}
          data={hourlyData}
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
      )}
    </>
  );

};

  export default Timechart;
