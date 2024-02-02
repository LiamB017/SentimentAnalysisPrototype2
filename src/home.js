
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Home = (props) => {

  // Initialize form as a state variable which accepts email and password
  const [form, setForm] = useState({
    topic: "",
  });

  const handleForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

     const handleClick = async () => {
       console.log("clicked");
   const response = await fetch("/sentiment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ topic: form.topic }),
   });

      if (response.status === 200) {
      const responseData = await response.json();
      console.log('Response from /sentiment:', responseData);
      // Handle the response data as needed
    } else {
      const errorData =  response.json();
      console.log('Error from /sentiment:', errorData);
      // Handle the error data as needed
};
     }

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
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Topic"
            variant="outlined"
            name="topic"
            value={form.topic}
            onChange={handleForm}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
            sx={{ mx: 4 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
