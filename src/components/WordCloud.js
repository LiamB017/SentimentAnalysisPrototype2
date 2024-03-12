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

  return (
    <ReactWordcloud
      words={wordsFromComments}
      style={{ marginRight: "1000px", width: "600px" }}
    />
  ); // Adjust the value as needed />;
};

export default WordCloud;
