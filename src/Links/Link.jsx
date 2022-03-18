import react from "react";
import { Grid } from "@mui/material";

const Link = ({ linkData }) => {
  return (
    <Grid>
      {linkData.length > 0 &&
        linkData.map((link) => {
          // console.log(link.url);
          return (
            <Grid item xs={4} lg={12} md={9}>
              {link.url}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Link;
