/**
 * Author: Trushita Maurya
 * Feature: User Management
 * Task: Login
 */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/logo.jpeg";
import { useStyles } from "./style";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AccountCircle } from "@mui/icons-material";

//navbar page links
const pages = [
  {
    name: "Destinations",
    link: "/destinations",
  },
  {
    name: "Activties To Do",
    link: "/activities",
  },
  {
    name: "Accommodation",
    link: "/accommodation",
  },
  {
    name: "Transport",
    link: "/flights",
  },
  {
    name: "Things to Carry",
    link: "/thingstocarry",
  },
];

//user profile settings
const settings = ["Profile", "Account", "Dashboard", "Logout"];

/**
 * Renders Nav Bar UI with user avatar for login and sign up button for guest users
 * @returns
 */
const NavBarComp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = React.useContext(AuthContext);
  const userId = auth.userId;

  const navigateToPage = (page) => {
    history.push(page);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleLogout = () => {
    auth.logout();
    history.push("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenProfile = () => {
    history.push("/userdashboard");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSignIn = () => {
    history.push("/register");
  };

  const displayUserAvatar = () => {
    return (
      <>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="secondary"
          >
            <AccountCircle fontSize="large" />
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
          >
            <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
        </div>
      </>
    );
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={Logo} alt="travelbae-logo" height="50px" />
          </Box>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              style={{ "&:hover": { color: "primary", cursor: "pointer" } }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                textDecoration: "none",
              }}
              color="primary"
              textAlign="center"
            >
              TRAVEL BAE
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigateToPage(page.link)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={Logo} alt="travelbae-logo" height="35px" />
          </Box>
          {/* <Link to={"/"} style={{ textDecoration: "none" }}> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            style={{ "&:hover": { color: "primary", cursor: "pointer" } }}
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
            color="primary"
            textAlign="center"
          >
            TRAVEL BAE
          </Typography>
          {/* </Link> */}
          <Box
            p={2}
            sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigateToPage(page.link)}
                sx={{ m: 2, color: "#5a5a5a", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} justifyContent="flex-end">
            {/* <Tooltip title="Open settings"> */}
            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}

            {userId ? (
              displayUserAvatar()
            ) : (
              <Button
                color="secondary"
                variant="contained"
                onClick={handleSignIn}
                type="submit"
              >
                <Typography color="white">Sign Up</Typography>
              </Button>
            )}

            {/* </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarComp;
