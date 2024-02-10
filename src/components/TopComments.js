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
          <Typography variant="h5">Top comments</Typography>
          <Box sx={{ border: "1px solid #000", padding: "1rem" }}>
            <div>
              <Typography variant="h6">Top Comment 1</Typography>
              <Typography>{responseData.top3commentsdatetime[0]}</Typography>
              <Typography>
                {responseData.top3comments[0].substring(0, 375)}
              </Typography>
            </div>
            <div>
              <Typography variant="h6">Top Comment 2</Typography>
              <Typography>{responseData.top3commentsdatetime[1]}</Typography>
              <Typography>
                {responseData.top3comments[1].substring(0, 375)}
              </Typography>
            </div>
            <div>
              <Typography variant="h6">Top Comment 3</Typography>
              <Typography>{responseData.top3commentsdatetime[2]}</Typography>
              <Typography>
                {responseData.top3comments[2].substring(0, 375)}
              </Typography>
            </div>
          </Box>
        </Grid>
      )}
    </div>
  );
};

export default TopComments;
