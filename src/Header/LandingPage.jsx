import react from "react";
import { Grid, Typography, Avatar } from "@mui/material";
const LandingPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      style={{ margin: 50 }}
    >
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h5" style={{ textDecoration: "underline" }}>
            Your Brand Your Links
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">Login or Sign up</Typography>
        </Grid>
        <Grid style={{ marginTop: 30 }}>
          <Avatar
            alt="Example"
            src="../Photos/person.png"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
