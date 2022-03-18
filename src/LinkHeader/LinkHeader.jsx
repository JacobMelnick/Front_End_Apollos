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
      <AppBar position="static" style={{ padding: 10 }}>
        <Toolbar>
          <Form setOriginalUrl={setOriginalUrl} originalUrl={originalUrl} />
          <Button color="inherit" variant="outlined" size="small">
            Shorten Url
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default LinkHeader;
