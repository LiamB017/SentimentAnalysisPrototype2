import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.js";
import Analytics from "./components/Analytics.js";
import TopComments from "./components/TopComments.js";

const Home = () => {
  const [responseData, setResponseData] = useState(null);

  console.log(responseData, "home page has responseData");

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
            color="black"
            component="div"
            sx={{ textAlign: "center" }}
          >
            home page
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <SearchForm setResponseData={setResponseData} />
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          {responseData && (
            <Grid item xs={4}>
              <Typography
                variant="h6"
                fontWeight="bolder"
                color="black"
                component="div"
                sx={{ textAlign: "center" }}
              >
                {" "}
                {responseData.post}
              </Typography>

            </Grid>
          )}
        </Grid>

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
        <Analytics responseData={responseData} />
      </Grid>
    </>
  );
};

export default Home;
