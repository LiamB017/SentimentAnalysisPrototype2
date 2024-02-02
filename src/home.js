
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchForm from "./components/SearchForm.js";

const Home = (props) => {


  const [data, setData] = useState([]);

      useEffect(() => {
        fetch("/sentiment")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            console.log(data);
          });
      }, []);

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
