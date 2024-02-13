import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";


const TopComments = ({ responseData }) => {
  // Remove the useState for responseData here
  console.log(responseData, "TopComments has responseData");

  return (
    <div>
      {responseData && (
        // ...

        <Grid item xs={8}>
          <Box
            sx={{
              border: "1px solid #000",
              padding: "1rem",
              borderRadius: "6px",
              backgroundColor: "#20556f",
            }}
          >
            <div>
              <Box
                sx={{
                  backgroundColor: "#20556f",
                  color: "#fff",
                }}
              >
                {" "}
                <Typography variant="h5">Top comments</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  padding: "1rem",
                  margin: "1rem 0",
                }}
              >
                {" "}
                <Typography variant="h6" color="#20556f" fontWeight="Bold">
                  Top Comment 1
                </Typography>{" "}
                <Typography>{responseData.top3commentsdatetime[0]}</Typography>
                <Typography>
                  {responseData.top3comments[0].substring(0, 200)}
                </Typography>
              </Box>
            </div>
            <div>

              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  padding: "1rem",
                  margin: "1rem 0",
                }}
              >
                {" "}
                <Typography variant="h6" color="#20556f" fontWeight="Bold">
                  Top Comment 2
                </Typography>{" "}
                <Typography>{responseData.top3commentsdatetime[1]}</Typography>
                <Typography>
                  {responseData.top3comments[1].substring(0, 200)}
                </Typography>
              </Box>
            </div>
            <div>

              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  padding: "1rem",
                  margin: "1rem 0",
                }}
              >
                {" "}
                <Typography variant="h6" color="#20556f" fontWeight="Bold">
                  Top Comment 3
                </Typography>{" "}
                <Typography>{responseData.top3commentsdatetime[2]}</Typography>
                <Typography>
                  {responseData.top3comments[2].substring(0, 205) + "..."}
                </Typography>
              </Box>
            </div>
          </Box>
        </Grid>
      )}
    </div>
  );
};

export default TopComments;
