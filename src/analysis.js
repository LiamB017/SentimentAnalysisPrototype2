import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Analysis = (props) => {


  console.log("analysis page");

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} sx={{ mt: 6 }}>
          <Typography
            variant="h2"
            color="black"
            component="div"
            sx={{ mx: 50 }}
          >
            Analytics
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Analysis;
