import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import TopComments from "./TopComments";
import WordCloud from "./WordCloud";
import Timechart from "./Timechart";
import SentimentOvertime from "./SentimentOverTime";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";


const Analytics = ({ analyticsData }) => {
  console.log(analyticsData, "Analytics has responseData");
  return (
    <>
      {analyticsData && (
        <>
          <Grid item xs={10} style={{ marginTop: "20px" }}>
            <Box
              sx={{
                padding: "1rem",
              }}
            >
              <Typography
                variant="h4"
                color="#20556f"
                component="div"
                sx={{ textAlign: "center", fontWeight: "bolder" }}
              >
                {analyticsData.post}
              </Typography>
              <Typography
                color="#20556f"
                component="div"
                sx={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "1rem",
                }}
              >
                <a href={analyticsData.url} style={{ color: "#20556f" }}>
                  {analyticsData.url}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={6} my={5}>
              <Piechart analyticsData={analyticsData} />
            </Grid>

            <Grid item xs={6} my={5}>
              <SentimentOvertime analyticsData={analyticsData} />
            </Grid>
            <Grid item xs={6} my={5}>
              <TopComments analyticsData={analyticsData} />
              {/* <Timechart analyticsData={analyticsData} /> */}
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
