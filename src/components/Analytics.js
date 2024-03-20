import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import TopComments from "./TopComments";
import WordCloud from "./WordCloud";
import Timechart from "./Timechart";


const Analytics = ({ analyticsData }) => {
  console.log(analyticsData, "Analytics has responseData");
  return (
    <>
      {analyticsData && (
        <>
          <Grid container spacing={6}>
            <Grid item xs={6} my={5}>
              <TopComments analyticsData={analyticsData} />
            </Grid>

            <Grid item xs={6} my={5}>
              <Piechart analyticsData={analyticsData} />
            </Grid>
            <Grid item xs={6} my={5}>
              <Timechart analyticsData={analyticsData} />
            </Grid>
            <Grid item xs={6} my={5}>
              <WordCloud analyticsData={analyticsData} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Analytics;
