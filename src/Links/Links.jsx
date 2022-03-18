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
      console.log(data);

      setLinkData(data.list);
    }
  }, [data]);
  return (
    <Grid
      style={{ padding: 10, margin: 10 }}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={2}
    >
      <Link linkData={linkData} />
    </Grid>
  );
};

export default Links;
