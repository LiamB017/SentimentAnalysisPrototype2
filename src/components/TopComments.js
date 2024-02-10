import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";


const TopComments = ({ responseData }) => {
  // Remove the useState for responseData here
  console.log(responseData, "TopComments has responseData");

  return (
    <div>
      {responseData && (
        <Grid item xs={8}>
          <Typography variant="h4">Top comments</Typography>
          <div>
            <Typography variant="h6">Comment 1</Typography>
            <Typography>{responseData.top3commentsdatetime[0]}</Typography>
            <Typography>{responseData.top3comments[0]}</Typography>
          </div>
          <div>
            <Typography variant="h6">Comment 2</Typography>
            <Typography>{responseData.top3commentsdatetime[1]}</Typography>
            <Typography>{responseData.top3comments[1]}</Typography>
          </div>
          <div>
            <Typography variant="h6">Comment 3</Typography>
            <Typography>{responseData.top3commentsdatetime[2]}</Typography>
            <Typography>{responseData.top3comments[2]}</Typography>
          </div>
        </Grid>
      )}
    </div>
  );
};

export default TopComments;
