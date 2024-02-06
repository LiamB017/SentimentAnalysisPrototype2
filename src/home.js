import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.js";
import Analytics from "./components/Analytics.js";

const Home = (props) => {
  const [responseData, setResponseData] = useState(null);

  console.log(responseData, "home page has responseData");

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="30vh" // Set the container height to the full viewport height
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

        <SearchForm setResponseData={setResponseData} />

        <Grid item xs={8}>
          <Typography
            variant="h2"
            fontWeight="bolder"
            color="black"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {/* Display other information based on responseData if needed */}
          </Typography>
        </Grid>

        {/* Pass responseData to the Analytics component */}
        <Analytics responseData={responseData} />
      </Grid>
    </>
  );
};

export default Home;
