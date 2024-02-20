

import React from 'react';
import { Typography } from '@mui/material';
import ReactWordcloud from 'react-wordcloud';

const WordCloud = ({ responseData }) => {


  console.log(responseData.commentsarray, "WordCloud has responsedata");

  const stopWords = [
    "the",
    "and",
    "a",
    "people",
    "an",
    "in",
    "anything",
    "on",
    "of",
    "to",
    "for",
    "with",
    "by",
    "at",
    "this",
    "that",
    "he",
    "is",
    "were",
    "was",
    "been",
    "it",
    "from",
    "as",
    "are",
    "have",
    "has",
    "had",
    "but",
    "not",
    "or",
    "if",
    "when",
    "who",
    "which",
    "we",
    "you",
    "your",
    "they",
    "them",
    "their",
    "there",
    "here",
    "into",
    "out",
    "up",
    "down",
    "then",
    "than",
    "just",
    "will",
    "can",
    "could",
    "should",
    "would",
    "may",
    "might",
    "must",
    "shall",
    "should",
    "now",
    "also",
    "been",
    "being",
    "where",
    "how",
    "why",
    "what",
    "when",
    "it's",
    "I",
    "me",
    "my",
    "mine",
    "myself",
    "you",
    "your",
    "yours",
    "yourself",
    "he",
    "him",
    "his",
    "himself",
    "she",
    "her",
    "hers",
    "herself",
    "it",
    "its",
    "it's",
    "itself",
    "we",
    "us",
    "our",
    "ours",
    "ourselves",
    "they",
    "them",
    "their",
    "theirs",
    "themselves",
    "about",
    "think",
    "time",
    "much",
    "like",
    "after",
    "very",
    "more",
    "made",
    "same",
    "[removed]",
    "want",
    "said",
    "because",
    "only",
    "some"
  ];


const wordFreq = (texts) => {
  const words = texts
    .join(" ")
    .replace(/\./g, "")
    .split(/\s/)
    .filter(
      (word) => word.length > 3 && !stopWords.includes(word.toLowerCase())
    );

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

const wordsFromComments = wordFreq(responseData.commentsarray);

console.log(wordsFromComments, "This is wordsFromComments");

return (
    <ReactWordcloud words={wordsFromComments} />

);


}

export default WordCloud;
