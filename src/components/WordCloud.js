import React from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloud = ({ analyticsData }) => {
  console.log(analyticsData.commentsarray, "WordCloud has responsedata");
  console.log(
    analyticsData.filtered_commentsarray,
    "WordCloud has filtered_commentsarray"
  );

  const wordFreq = (texts) => {
    const words = texts
      .join(" ")
      .replace(/\./g, "")
      .split(/\s/)
      .filter((word) => word.length > 3);

    const freqMap = {};

    for (const w of words) {
      if (!freqMap[w]) freqMap[w] = 0;
      freqMap[w] += 1;
    }
    return Object.keys(freqMap).map((word) => ({
      text: word,
      value: freqMap[word],
    }));
  };

  const wordsFromComments = wordFreq(analyticsData.filtered_commentsarray);

  console.log(wordsFromComments, "This is wordsFromComments");

   const options = {
     colors: ["#204a7f", "#3f88c5", "#61b2ed", "#aed9ff"], // Gradient of blue shades
     enableTooltip: true,
     deterministic: false,
     fontFamily: "'Public Sans', sans-serif", // Change to a widely supported font family
     fontSizes: [30, 50], // Increase font size range
     fontStyle: "normal",
     fontWeight: "bold", // Use a bold font weight for emphasis
     padding: 2, // Increase padding for better spacing
     rotations: 2, // Reduce the number of rotations for a cleaner look
     rotationAngles: [0, 90], // Adjust rotation angles
     scale: "sqrt",
     spiral: "archimedean",
     transitionDuration: 1500, // Increase transition duration for smoother animations
   };

  return (
    <ReactWordcloud
      words={wordsFromComments}
      style={{ marginRight: "1000px", width: "600px" }}
      options={options}
    />
  ); // Adjust the value as needed />;
};

export default WordCloud;
