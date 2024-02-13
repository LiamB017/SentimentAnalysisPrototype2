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
          <Grid container spacing={0}>
            <Grid item xs={6} my={10}>
              <TopComments responseData={responseData} />
            </Grid>

            <Grid item xs={6} my={10}>
              <Piechart responseData={responseData} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Analytics;
