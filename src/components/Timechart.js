import React  from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

const firstDate = String(Object.keys(dateCounts)[0]);

  console.log("First date:", firstDate);

  const secondDate = String(Object.keys(dateCounts)[1]);



  const thirdDate = String(Object.keys(dateCounts)[2]);


console.log("this is first count",dateCounts[firstDate])

const firstDateCount = dateCounts[firstDate];

   const data = Object.keys(dateCounts).map((date) => ({
    name: date,
    commentCount: dateCounts[date],
  }));


 return (
   <LineChart
     width={980}
     height={500}
     data={data}
     margin={{
       top: 5,
       left: 135,
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
 );

};

  export default Timechart;
