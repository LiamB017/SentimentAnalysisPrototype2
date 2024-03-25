import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const SentimentStats = ({ analyticsData }) => {
  return (
    <>
      {analyticsData && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={24}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

                  borderRadius: 2,
                  padding: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    padding: 1,
                    mx: 3,
                    mb: 2,
                    color: "#20556f",
                  }}
                >
                  <Typography
                    fontSize={16}
                    fontWeight="bolder"
                    color="black"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Sentiment is {analyticsData.sentiment}
                  </Typography>
                </Box>

                {/* <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    padding: 2,
                    mx: 3,
                  }}
                >
                  <Typography
                    fontSize={16}
                    fontWeight="bolder"
                    color="black"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Compound Score is {analyticsData.compound}
                  </Typography>
                </Box> */}

                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 2,
                    padding: 1,
                    mx: 3,
                    mb: 2,
                    color: "#20556f",
                  }}
                >
                  <Typography
                    fontSize={16}
                    fontWeight="bolder"
                    color="black"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Sentiment Analyzed from {analyticsData.number_of_comments}{" "}
                    comments
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
