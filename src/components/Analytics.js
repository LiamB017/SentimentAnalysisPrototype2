import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import TopComments from "./TopComments";
import WordCloud from "./WordCloud";
import Timechart from "./Timechart";


const Analytics = ({ responseData }) => {
  return (
    <>
      {responseData && (
        <>
          <Grid container spacing={6}>
            <Grid item xs={6} my={10}>
              <TopComments responseData={responseData} />
            </Grid>

            <Grid item xs={6} my={10}>
              <Piechart responseData={responseData} />
            </Grid>
            <Grid item xs={6} my={10}>
              <Timechart responseData={responseData} />
            </Grid>
              <Grid item xs={6} my={10}>
                <WordCloud responseData={responseData} />
              </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Analytics;
