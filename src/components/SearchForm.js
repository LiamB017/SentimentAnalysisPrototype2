import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchForm = (props) => {

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
    body: JSON.stringify({ topic: form.topic,
       subreddit: form.subreddit }),
  });

  if (response.status === 200) {
    const responseData = await response.json();
    console.log("Response from /sentiment:", responseData);
    // Handle the response data as needed
  } else {
    const errorData = response.json();
    console.log("Error from /sentiment:", errorData);
    // Handle the error data as needed
  }
};

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
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="Subreddit"
        variant="outlined"
        name="subreddit"
        value={form.subreddit}
        onChange={handleForm}
      />
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
  </>
);
}


export default SearchForm;
