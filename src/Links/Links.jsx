import react from "react";
import { Grid } from "@mui/material";
import Link from "../Links/Link";
const Links = () => {
  return (
    <Grid
      style={{ padding: 10, margin: 10 }}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Link />
    </Grid>
  );
};

export default Links;
