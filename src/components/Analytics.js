import React from "react";
import Piechart from "./Piechart";
import { useState, ActivityIndicator } from "react";

const Analytics = ({ responseData }) => {
  return (
    <>
      {/* {responseData && (
        <Grid item xs={8}>
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
        </Grid>
      )} */}

        {responseData && (
          <Piechart responseData={responseData} />
        )}

    </>
  );
};

export default Analytics;
