
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchForm from "./components/SearchForm.js";

const Home = (props) => {



  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="30vh" // Set the container height to the full viewport height
      >
        <Grid item xs={8}>
          <Typography
            variant="h2"
            fontWeight="bolder" // Corrected the property name
            color="black"
            component="div"
            sx={{ textAlign: "center" }} // Center text within the Typography component
          >
            home page
          </Typography>
        </Grid>


        <SearchForm/>
      </Grid>
    </>
  );
};

export default Home;
