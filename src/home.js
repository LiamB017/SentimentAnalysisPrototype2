import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.js";
import Analytics from "./components/Analytics.js";
import { Box } from "@mui/material";


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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="30vh" // Set the container height to the full viewport height
        // backgroundColor="#20556f"
      >
        <Grid item xs={8}>
          <Typography
            variant="h2"
            fontWeight="bolder"
            color="#20556f"
            component="div"
            sx={{ textAlign: "center" }}
          >
            Sentiment Analyzer
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", margin: "0 auto" }}>
          <SearchForm setResponseData={setResponseData} />
        </Grid>
        {responseData && (
          <Grid item xs={8}>
            <Typography
              variant="h5"
              fontWeight="bolder"
              color="#20556f"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Top Search Results
            </Typography>
          </Grid>
        )}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column" // Change flexDirection to "column" for vertical ordering
          spacing={1}
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
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          {analyticsData && (
            <>
              <Grid item xs={10} style={{ marginTop: "20px" }}>
                <Box
                  sx={{
                    padding: "1rem",
                  }}
                >
                  <Typography
                    variant="h4"
                    color="#20556f"
                    component="div"
                    sx={{ textAlign: "center", fontWeight: "bolder" }}
                  >
                    {analyticsData.post}
                  </Typography>
                  <Typography
                    color="#20556f"
                    component="div"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      marginTop: "1rem",
                    }}
                  >
                    <a href={responseData.url} style={{ color: "#20556f" }}>
                      {analyticsData.url}
                    </a>
                  </Typography>
                </Box>
              </Grid>
            </>
          )}
        </Grid>

        <Analytics analyticsData={analyticsData} />
      </Grid>
    </>
  );
};

export default Home;
