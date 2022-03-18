import react, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const Link = ({ linkData, shortUrl }) => {
  return (
    <Grid>
      {linkData.length > 0 &&
        linkData.map((link, id) => {
          return (
            <Grid key={id} item xs={12} lg={12} md={9} style={{ padding: 10 }}>
              {link.url} ---> {shortUrl}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Link;
