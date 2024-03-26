import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.js";
import Analytics from "./components/Analytics.js";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";


const Home = () => {
  const [responseData, setResponseData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
  console.log(responseData, "home page has responseData");
 console.log(analyticsData, "home page has analyticsData");

   const handleClick = (title) => {
     setLoading(true); // Start loading

     fetch("/analyze_sentiment", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         post_title: title,
         subreddit: responseData.subreddit,
       }),
     })
       .then((response) => response.json())
       .then((analyticsData) => {
         console.log("Response from /analyze_sentiment:", analyticsData);
         setAnalyticsData(analyticsData);
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
    <>
      <div style={{ display: "flex",  }}>
        <Grid


        >
          <Grid item xs={2}>
            <Typography
              variant="h4"
              fontWeight="bolder"
              color="#20556f"
              component="div"
              sx={{ textAlign: "left", marginLeft: "40px", marginTop: "40px" }}
            >
              Reddit
              <br></br>
              Sentiment
              <br></br>
              Analyzer
            </Typography>
            <Grid item xs={1}>
              <Typography
                variant="h6"
                fontWeight="bolder"
                color="#20556f"
                component="div"
                sx={{
                  textAlign: "left",
                  marginLeft: "40px",
                  marginTop: "40px",
                }}
              >
                This application is a sentiment analyzer that helps you analyze
                the sentiment of brands, products, and services by analyzing the
                sentiment of comments found on posts on Reddit. Visualizations
                and charts will display based on your desired search query.
                <br></br>
                <br></br>
                Enter a search query below to get started.
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "left", marginTop: "40px" }}>
              <SearchForm setResponseData={setResponseData} />
            </Grid>

            {responseData && (
              <Grid item xs={8}>
                <Typography
                  variant="h4"
                  fontWeight="bolder"
                  color="#20556f"
                  component="div"
                  sx={{
                    textAlign: "left",
                    marginLeft: "40px",
                    marginTop: "20px",
                  }}
                >
                  Top Search Results
                </Typography>
              </Grid>
            )}
            <Grid
              container
              justifyContent="left"
              alignItems="flex-start" // Align items to the left
              flexDirection="column" // Change flexDirection to "column" for vertical ordering
              spacing={1}
              sx={{
                textAlign: "left",
                marginLeft: "40px",
                marginTop: "20px",
              }}
            >
              {responseData &&
                responseData.post_titles &&
                responseData.post_titles.map((title, index) => (
                  <Grid
                    xs={8}
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      cursor: "pointer",
                    }}
                    item
                    key={index}
                    onClick={() => handleClick(title)} // Keep the onClick handler
                  >
                    <Typography style={{ fontWeight: "bold" }}>
                      {" "}
                      {index + 1}. {title}{" "}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container
          justifyContent="left"
          alignItems="left"
         >
          <Analytics analyticsData={analyticsData} />
        </Grid>
      </div>
    </>
  );
};

export default Home;
