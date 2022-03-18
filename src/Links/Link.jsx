import react, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const Link = ({ linkData, shortUrl }) => {
  console.log(linkData);
  return (
    <Grid>
      {linkData.length > 0 &&
        linkData.map((link, id) => {
          return (
            <Grid
              key={id}
              item
              xs={12}
              style={{ margin: 10, maxWidth: "100vw" }}
            >
              {link.url}/{link.id} ---> {shortUrl}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Link;
