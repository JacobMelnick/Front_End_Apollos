import react from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Grid
} from "@mui/material";
import LandingPage from "./LandingPage";

import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "#2E3B55", fontStyle: "italic" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              ReLinky
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <LandingPage />
    </Grid>
  );
};

export default Header;
