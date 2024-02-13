import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import TopComments from "./TopComments";
import SentimentStats from "./SentimentStats";
import Barchart from "./Barchart";


const Analytics = ({ responseData }) => {
  return (
    <>
      {responseData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={6} my={5}>
              <TopComments responseData={responseData} />
            </Grid>
            <Grid item xs={6} my={5}>
              <Piechart responseData={responseData} />
            </Grid>

            <Grid item xs={4}>
              <SentimentStats responseData={responseData} />
            </Grid>

            <Barchart />
          </Grid>
        </>
      )}
    </>
  );
};

export default Analytics;
