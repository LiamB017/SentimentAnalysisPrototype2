import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const SearchForm = ({ setResponseData }) => {
  const [form, setForm] = useState({
    subreddit: "ireland", // Default subreddit value
    topic: "No Vote", // Default topic value
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
      setLoading(true); // Start loading

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
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    }
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={6} mx={50} my={5}>
          <TextField
            fullWidth
            label="Subreddit"
            variant="outlined"
            name="subreddit"
            onChange={handleForm}
            error={errors.subreddit}
            helperText={errors.subreddit?.message}
            value={form.subreddit}
          />
        </Grid>
        <Grid item xs={6} my={2} mx={50}>
          <TextField
            fullWidth
            label="Topic"
            variant="outlined"
            name="topic"
            onChange={handleForm}
            error={errors.topic}
            helperText={errors.topic?.message}
            value={form.topic}
          />
        </Grid>
        <Grid item xs={8} my={2} mx={50}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
            sx={{
              mx: 38,
              backgroundColor: "#20556f",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "#163d4f",
              },
            }}
          >
            Submit
          </Button>
          {/* Render ActivityIndicator when loading */}
        </Grid>
        <Grid item xs={8} my={5} mx={85}>
          {" "}
          {loading && <CircularProgress />}{" "}
        </Grid>
      </Grid>
    </>
  );
};

export default SearchForm;
