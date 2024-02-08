import React from "react";
import Piechart from "./Piechart";
import { useState } from "react";

const Analytics = (responseData, negative) => {




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
      <Piechart responseData={responseData} />
    </>
  );
};

export default Analytics;
