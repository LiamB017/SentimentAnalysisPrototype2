import React from "react";
import Piechart from "./Piechart";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const SentimentStats = ({ responseData }) => {
  return (
    <>
      {responseData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={24}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#20556f",
                  borderRadius: 2,
                  padding: 2,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    padding: 2,
                    mx: 2,
                  }}
                >
                  <Typography
                    fontSize={12}
                    fontWeight="bolder"
                    color="black"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Sentiment is {responseData.sentiment}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    padding: 2,
                    mx: 2,
                  }}
                >
                  <Typography
                    fontSize={12}
                    fontWeight="bolder"
                    color="black"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Compound Score is {responseData.compound}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    padding: 2,
                    mx: 2,
                  }}
                >
                  <Typography
                    fontSize={12}
                    fontWeight="bolder"
                    color="black"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Sentiment Analyzed from {responseData.comments}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default SentimentStats;
