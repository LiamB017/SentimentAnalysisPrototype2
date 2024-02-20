import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.js";
import Analytics from "./components/Analytics.js";
import { Box } from "@mui/material";

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

        <Grid item xs={12} sx={{ textAlign: "center", margin: "0 auto" }}>
          <SearchForm setResponseData={setResponseData} />
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          {responseData && (
            <>
              <Grid item xs={4}>
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
                    sx={{ textAlign: "center", fontWeight: "bolder", marginTop: "1rem" }}
                  >
                    <a href={responseData.url} style={{ color: "white" }}>{responseData.url}</a>
                  </Typography>
                </Box>
              </Grid>

</>



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
