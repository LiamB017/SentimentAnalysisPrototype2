import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchForm = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

  const handleForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };


  const isRequired = () => {
    let error = false;

    if (!form.subreddit) {
      error = true;

      setErrors((prevState) => ({
        ...prevState,
        subreddit: {
          message: "A subreddit is required!",
        },
      }));
    }

    if (!form.topic) {
      error = true;
      setErrors((prevState) => ({
        ...prevState,
        topic: {
          message: "A topic or issue is required!",
        },
      }));
    }

    return error;
  };

  const handleClick = async () => {
    if (!isRequired()) {
      console.log("clicked");
      await fetch("/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: form.topic, subreddit: form.subreddit }),
      })
        .then(async (response) => {
          const responseData = await response.json();
          console.log("Response from /sentiment:", responseData);
          navigate("/analysis");
        })
        .catch((err) => {
          console.error(err);
          console.log(err.response.data);
          setErrors(err.response.data.errors)
        });

      /*  if (response.status === 200) {
    const responseData = await response.json();
    console.log("Response from /sentiment:", responseData);
    // Handle the response data as needed
  } else {
    const errorData = response.json();
    console.log("Error from /sentiment:", errorData);
    // Handle the error data as needed
  } */
    }
  };

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
          error={errors.subreddit}
          helperText={errors.subreddit?.message}
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
          error={errors.topic}
          helperText={errors.topic?.message}
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
};

export default SearchForm;
