import react from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Form from "../LinkHeader/Form/Form";
const LinkHeader = ({ originalUrl, setOriginalUrl }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <AppBar position="static" style={{ padding: 10, background: "#87ceeb" }}>
        <Toolbar>
          <Form setOriginalUrl={setOriginalUrl} originalUrl={originalUrl} />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default LinkHeader;
