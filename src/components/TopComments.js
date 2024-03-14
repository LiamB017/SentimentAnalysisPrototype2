import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const TopComments = ({ analyticsData }) => {
  console.log(analyticsData, "TopComments has responseData");


  const [showTopComments, setShowTopComments] = useState(true);

  const toggleView = () => {
    setShowTopComments(!showTopComments);
  };

  return (
    <div>
      {analyticsData && (
        <Grid item xs={10} sx={{ justifyContent: "flex-end" }}>
          <Box
            sx={{
              padding: "1rem",
              borderRadius: "6px",
              backgroundColor: "#fff",
              marginLeft: "12rem",
            }}
          >
            <Box
              sx={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography
                variant="h5"
                color="#20556f"
                style={{ fontWeight: 750 }}
              >
                Top comments
              </Typography>
              <Button
                onClick={toggleView}
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#20556f",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Adjusted shadow
                  transition:
                    "background-color 0.3s, color 0.3s, box-shadow 0.3s", // Include box-shadow in transition
                  "&:hover": {
                    backgroundColor: "#163d4f",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)", // Adjusted shadow on hover
                  },
                }}
              >
                {showTopComments ? "Show Bar Chart" : "Show Top Comments"}
              </Button>
            </Box>

            {showTopComments && (
              <>
                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "6px",
                    padding: "1rem",
                    margin: "2rem 0",
                  }}
                >
                  {" "}
                  <Typography variant="h6" color="#20556f" fontWeight="Bold">
                    Top Comment 1
                  </Typography>{" "}
                  <Typography sx={{ fontWeight: "", fontSize: "14px" }}>
                    {analyticsData.top3commentsdatetime[0]}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {analyticsData.top3comments[0].substring(0, 200)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "6px",
                    padding: "1rem",
                    margin: "2rem 0",
                  }}
                >
                  {" "}
                  <Typography variant="h6" color="#20556f" fontWeight="Bold">
                    Top Comment 2
                  </Typography>{" "}
                  <Typography sx={{ fontWeight: "", fontSize: "14px" }}>
                    {analyticsData.top3commentsdatetime[1]}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {analyticsData.top3comments[1].substring(0, 200)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "6px",
                    padding: "1rem",
                    margin: "2rem 0",
                  }}
                >
                  {" "}
                  <Typography variant="h6" color="#20556f" fontWeight="Bold">
                    Top Comment 3
                  </Typography>{" "}
                  <Typography sx={{ fontWeight: "", fontSize: "14px" }}>
                    {analyticsData.top3commentsdatetime[2]}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {analyticsData.top3comments[2].substring(0, 205) + "..."}
                  </Typography>
                </Box>
              </>
            )}
          </Box>

          {!showTopComments && (
            <ResponsiveContainer width="100%" height={460} mx={40}>
              <BarChart
                data={[
                  {
                    name: "Top Comment 1",
                    Upvotes: analyticsData.topcommentsscore[0],
                  },
                  {
                    name: "Top Comment 2",
                    Upvotes: analyticsData.topcommentsscore[1],
                  },
                  {
                    name: "Top Comment 3",
                    Upvotes: analyticsData.topcommentsscore[2],
                  },
                ]}
                margin={{ left: 110, top: 40 }}
              >
                <XAxis stroke="black" dataKey="name" />
                <YAxis stroke="black" />
                <Tooltip
                  wrapperStyle={{
                    backgroundColor: "#20556f",
                    color: "black",
                  }}
                />
                <Legend />
                <Bar dataKey="Upvotes" fill="#20556f" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Grid>
      )}
    </div>
  );
};

export default TopComments;
