import React  from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area } from "recharts";

const Timechart = ({ responseData }) => {
  console.log("Timechart has responsedata", responseData);

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
  responseData.commentsdatetime.forEach((dateString) => {
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


};

  export default Timechart;
