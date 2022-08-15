/**
 * Author: Trushita Maurya
 * File: Display user profile
 * @returns
 */
 import React, { useContext } from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../context/AuthContext";
import { Box, CssBaseline, Divider, Paper, Typography } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import { BACKEND_URL } from "../config";
import axios from "axios";
import FormDialogComp from "../components/FormDialogAlert";

/**
 * This Page is responsible for displaying the user profile Page.
 * @param {*} props 
 * @returns 
 */

const UserProfile = () => {
  const auth = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [resData, setResData] = React.useState([]);
  const handleClick = () => {
    setOpen(true);
  };

  const handleSubmit = (pwdObj) => {
    const url = `${BACKEND_URL}/user/changePassword`;
    const userUpdate = { ...pwdObj, userID: userData.email };
    axios
      .post(url, userUpdate)
      .then((res) => {
        setResData(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (!auth.userProfileData.length) {
    auth.loadUserProfile();
  }
  const userData = auth.userProfileData.length ? auth.userProfileData[0] : {};

  const displayUserInfo = () => {
    if (Object.keys(userData).length !== 0)
      return (
        <>
          <CssBaseline />
          <Grid item xs={6} lg={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              pt={2}
            >
              <Typography alignItems="center"> Name </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Box display="flex" pt={2}>
              <Typography alignItems="center">
                {userData.fName} {userData.lName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              pt={2}
            >
              <Typography alignItems="center">Email Id</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Box display="flex" pt={2}>
              <Typography alignItems="center">{userData.email}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              pt={2}
            >
              <Typography alignItems="center">Password</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Box display="flex" pt={2} pb={5}>
              <Typography
                component="a"
                sx={{ textDecoration: "none", cursor: "pointer" }}
                alignItems="center"
                onClick={handleClick}
              >
                change password
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormDialogComp
              open={open}
              handleClose={handleClose}
              handleSubmitForm={handleSubmit}
              isUserPopUp={true}
              alertMsg={resData}
            />
          </Grid>
        </>
      );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} lg={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Paper elevation={1} sx={{ marginLeft: "2rem" }}>
          <Box display="flex" flexDirection="column" mt={3}>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              pt={2}
            >
              <Typography variant="h5" alignItems="center">
                Account Settings
              </Typography>
              <Box display="inline-flex" ml={2}>
                {" "}
                <AiOutlineSetting size={30} />{" "}
              </Box>
            </Box>
            <Box ml={3} mr={3} mb={3}>
              <Divider />
            </Box>
            <Box display="flex" justifyContent="center" alignItem="center">
              <Grid container>{displayUserInfo()}</Grid>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
