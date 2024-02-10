import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TopComments from "./TopComments";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const SentimentStats = ({ responseData }) => {
  return (
    <>
      {responseData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ border: "1px solid #000", padding: "1rem" }}>
                <Typography
                  fontSize={15}
                  fontWeight="bolder"
                  color="black"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Sentiment is {responseData.sentiment}
                </Typography>
                <Typography
                  fontSize={15}
                  fontWeight="bolder"
                  color="black"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Compound Score: {responseData.compound}
                </Typography>
                <Typography
                  fontSize={15}
                  fontWeight="bolder"
                  color="black"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Sentiment analyzed from {responseData.comments} comments
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default SentimentStats;
