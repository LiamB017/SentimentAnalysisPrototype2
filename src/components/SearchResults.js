import React, { useState } from "react";
import Grid from "@mui/material/Grid";

const SearchResults = ({ responseData }) => {
  console.log(responseData, "Searchresults has responseData");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
    const [response, setResponseData] = useState(null);

  const handleClick = (title) => {
    setLoading(true); // Start loading

    fetch("/analyze_sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_title: title, subreddit: responseData.subreddit}),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log("Response from /analyze_sentiment:", responseData);
        setResponseData(responseData);
      })
      .catch((err) => {
        console.error(err);
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <div>
      {responseData && responseData.post_titles && (
        <Grid container justifyContent="center" alignItems="center">
          {responseData.post_titles.map((title, index) => (
            <Grid item key={index} onClick={() => handleClick(title)}>
              {index + 1}. {title}
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SearchResults;
