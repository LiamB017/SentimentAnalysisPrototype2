import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchForm = ({ setResponseData }) => {
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

  const handleClick = () => {
    if (!isRequired()) {
      console.log("clicked");
      fetch("/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: form.topic, subreddit: form.subreddit }),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          console.log("Response from /sentiment:", responseData);
          setResponseData(responseData);
        })
        .catch((err) => {
          console.error(err);
          console.log(err.response.data);
          setErrors(err.response.data.errors);
        });
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
