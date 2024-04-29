import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@emotion/react";

const SearchForm = ({ setResponseData }) => {
  const [form, setForm] = useState({
    subreddit: "ireland", // Default subreddit value
    topic: "Varadkar", // Default topic value
  });

  const theme = useTheme();

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
    setErrors({}); // Reset errors state

    if (!isRequired()) {
      setLoading(true); // Start loading

      fetch("/https://backendsentiment.azurewebsites.net/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: form.topic, subreddit: form.subreddit }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseData) => {
          console.log("Response from /sentiment:", responseData);
          setResponseData(responseData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setErrors({
            global: {
              message:
                "Error fetching data. Subreddit may not exist, Try different search terms",
            },
          });
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    }
  };

  return (
    <>
      <Grid container justifyContent="left" alignItems="left">
        <Grid item xs={6} mx={4} my={2}>
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
        <Grid item xs={6} my={2} mx={4}>
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
        <Grid item xs={12} my={2} mx={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
            sx={{
              backgroundColor: "#20556f",
              color: "#fff",
              padding: "20px 40px", // Increase padding to make the button larger
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
        {loading && (
          <Grid item xs={8} my={20} mx={40}>
            <CircularProgress size={80} />
          </Grid>
        )}
        {errors.global && (
          <Grid item xs={8} my={15} mx={5}>
            <h2
              style={{
                color: "#d32f2f",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              {errors.global.message}
            </h2>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SearchForm;
