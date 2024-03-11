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


        {/* <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          {response && (
            <>
              <Grid item xs={10}>
                <Box
                  sx={{
                    border: "1px solid #000",
                    padding: "1rem",
                    borderRadius: "6px",
                    backgroundColor: "#20556f",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="white"
                    component="div"
                    sx={{ textAlign: "center", fontWeight: "bolder" }}
                  >
                    {responseData.post}
                  </Typography>
                  <Typography
                    color="white"
                    component="div"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      marginTop: "1rem",
                    }}
                  >
                    <a href={responseData.url} style={{ color: "white" }}>
                      {responseData.url}
                    </a>
                  </Typography>
                </Box>
              </Grid>
            </>
          )}
        </Grid> */}

        <Grid item xs={8}>
          <Typography
            variant="h2"
            fontWeight="bolder"
            color="black"
            component="div"
            sx={{ textAlign: "center" }}
          >
            <div></div>
          </Typography>
        </Grid>
        <Grid item xs={8}></Grid>
        <Analytics analyticsData={analyticsData} />
      </Grid>
    </>
  );
};

export default Home;
