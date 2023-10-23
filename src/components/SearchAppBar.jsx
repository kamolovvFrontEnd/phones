import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  Drawer,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Menu from "@mui/icons-material/Menu";

function SearchAppBar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Button variant="contained" href="/iphone">
              iPhone
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <Button variant="contained" href="/samsung">
            Samsung
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outlined" href="/" disableElevation>
            home
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          {["left"].map((anchor) => (
            <>
              <Button onClick={toggleDrawer(anchor, true)}>
                <Menu sx={{ color: "white" }} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </>
          ))}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Button
            component={NavLink}
            to={"/cart"}
            size="small"
            color="inherit"
          >
            <ShoppingCartOutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar;
