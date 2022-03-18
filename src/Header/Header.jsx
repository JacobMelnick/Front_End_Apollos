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
import Form from "../Header/Form/Form";
const Header = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <AppBar position="static" style={{ padding: 10 }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Form />
          <Button color="inherit" variant="outlined" size="small">
            Shorten Url
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
