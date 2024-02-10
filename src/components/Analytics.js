import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TopComments from "./TopComments";
import SentimentStats from "./SentimentStats";

const Analytics = ({ responseData }) => {
  return (
    <>
      {responseData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TopComments responseData={responseData} />
            </Grid>
            <Grid item xs={6}>
              <Piechart responseData={responseData} />
            </Grid>
            <Grid item xs={6}>
           <SentimentStats responseData={responseData} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Analytics;
