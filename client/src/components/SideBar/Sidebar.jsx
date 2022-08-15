/**
 * Author: Smriti Mishra
 * Feature: UserDashboard
 */

import React from "react";
import ProfileImage from "./../../assets/profile.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./Sidebar.css";
import { Box, Divider, Paper, Typography, useTheme } from "@mui/material";
import { menu } from "./SideBarMenu";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Sidebar = (props) => {
  const history = useHistory();
  const navigateToPage = (link) => {
    history.push(link);
  };

  const auth = useContext(AuthContext);
  const theme = useTheme();
  const classes = useStyles();

  if (!auth.userProfileData.length) {
    auth.loadUserProfile();
  }
  const userData = auth.userProfileData.length ? auth.userProfileData[0] : {};

  return (
    <Paper elevation={3}>
      <Box
        mt={theme.spacing(4)}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          pb={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <img
            className="sidebar-userphoto"
            alt="ProfileImage"
            src={ProfileImage}
          />
          <Typography variant="h5">
            {userData.fName} {userData.lName}
          </Typography>
        </Box>
        <Box ml={3} mr={3}>
          <Divider />
        </Box>
        <Box pl={4} mb={10} pr={4}>
          {menu.map((item) => (
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              className={classes.root}
            >
              <ListItem onClick={() => navigateToPage(item.link)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1ec6b6" }}>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Sidebar;
