
// import React, { useState } from "react";
// import ReactWordcloud from "react-wordcloud";
// import { Button } from "@mui/material";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
// import dayjs from "dayjs";
// import { ResponsiveContainer } from "recharts";

// const WordCloud = ({ analyticsData }) => {
//   console.log(analyticsData.commentsarray, "WordCloud has responsedata");
//   console.log(
//     analyticsData.filtered_commentsarray,
//     "WordCloud has filtered_commentsarray"
//   );

//    const [showHourlyChart, setShowHourlyChart] = useState(true);

//    const toggleView = () => {
//      setShowHourlyChart(!showHourlyChart);
//    };


//     const hourlyCounts = {};

//       analyticsData.commentsdatetime.forEach((dateString) => {
//         const date = dayjs(dateString);
//         const formattedHour = date.format("MM-DD HH[h]");
//         hourlyCounts[formattedHour] = (hourlyCounts[formattedHour] || 0) + 1;
//       });

//         const hourlyData = Object.keys(hourlyCounts).map((hour) => ({
//           name: `${hour}h`,
//           commentCount: hourlyCounts[hour],
//         }));



//   const wordFreq = (texts) => {
//     const words = texts
//       .join(" ")
//       .replace(/\./g, "")
//       .split(/\s/)
//       .filter((word) => word.length > 3);

//     const freqMap = {};

//     for (const w of words) {
//       if (!freqMap[w]) freqMap[w] = 0;
//       freqMap[w] += 1;
//     }
//     return Object.keys(freqMap).map((word) => ({
//       text: word,
//       value: freqMap[word],
//     }));
//   };

//   const wordsFromComments = wordFreq(analyticsData.filtered_commentsarray);

//   console.log(wordsFromComments, "This is wordsFromComments");

//    const options = {
//      colors: ["#204a7f", "#3f88c5", "#61b2ed", "#aed9ff"], // Gradient of blue shades
//      enableTooltip: true,
//      deterministic: false,
//      fontFamily: "'Public Sans', sans-serif", // Change to a widely supported font family
//      fontSizes: [30, 50], // Increase font size range
//      fontStyle: "normal",
//      fontWeight: "bold", // Use a bold font weight for emphasis
//      padding: 2, // Increase padding for better spacing
//      rotations: 2, // Reduce the number of rotations for a cleaner look
//      rotationAngles: [0, 90], // Adjust rotation angles
//      scale: "sqrt",
//      spiral: "archimedean",
//      transitionDuration: 1500, // Increase transition duration for smoother animations
//    };

//   return (
//     <>
//       <Button
//         onClick={toggleView}
//         variant="contained"
//         color="primary"
//         sx={{
//           backgroundColor: "#20556f",
//           color: "#fff",
//           marginLeft: "420px",
//           marginBottom: "20px",
//           marginTop: "18px",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           fontWeight: "bold",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//           transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
//           "&:hover": {
//             backgroundColor: "#163d4f",
//             boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
//           },
//         }}
//       >
//         {showHourlyChart
//           ? "Show WordCloud"
//           : "Hourly User Engagement "}
//       </Button>
//       {showHourlyChart && (
//         <LineChart
//           width={660}
//           height={500}
//           data={hourlyData}
//           margin={{
//             top: 5,
//             right: 60,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="4 4" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="commentCount"
//             stroke="#20556f"
//             strokeWidth={7}
//             activeDot={{ r: 8 }}
//           />
//         </LineChart>
//       )}
//       {showHourlyChart === false && (
//         <ReactWordcloud
//           words={wordsFromComments}
//           style={{ marginRight: "800px", width: "500px" }}
//           options={options}
//         />
//       )}
//     </>
//   ); // Adjust the value as needed />;
// };

// export default WordCloud;
