import react, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Link from "../Links/Link";
import { useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../graphql/query";

const Links = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    if (data) {
      setLinkData(data.list);
    }
  }, [data]);
  return (
    <Grid
      style={{ padding: 10, margin: 10, maxWidth: "100%" }}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Link linkData={linkData} />
      </Grid>
    </Grid>
  );
};

export default Links;
