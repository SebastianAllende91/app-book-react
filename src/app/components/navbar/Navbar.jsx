import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/login/action";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import TemporaryDrawer from "../drawer/Drawer";

export default function MenuAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setDrawer] = useState(false);
  const dispatch = useDispatch();

  const handleDrawer = useCallback(() => {
    setDrawer((value) => !value);
  }, []);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "whitesmoke" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
            style={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#C4523A"}}
          >
            LiBooksApp
          </Typography>
          {props.auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{ color: "#9C9998" }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ color: "#9C9998" }}
              >
                <MenuItem onClick={handleClose}>
                  <AccountBoxIcon />
                   Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon />
                   Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={openDrawer} handleClose={handleDrawer} />
    </Box>
  );
}
