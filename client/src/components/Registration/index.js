/**
 * Author: Trushita Maurya
 * Feature: User Management
 * Task: Registration
 *
 */
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "@material-ui/core";
import Alert from "@mui/material/Alert";

/**
 * File renders the registration form and takes care of client side validation
 * @param {*} props
 * @returns
 */
function RegisterComp(props) {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const containerStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [error, setError] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  //first name validation
  const handlefNameChange = (value) => {
    setfName(value);
    let pattern = new RegExp(/^[a-zA-Z]+$/);
    let errorObj = Object.assign({}, error);
    if (!pattern.test(value)) {
      errorObj.fName = "Enter only alphabets";
      setError(errorObj);
      return false;
    }
    errorObj.fName = "";
    setError(errorObj);
    return true;
  };

  //last name validation
  const handlelNameChange = (value) => {
    setlName(value);
    let pattern = new RegExp(/^[a-zA-Z]+$/);
    let errorObj = Object.assign({}, error);
    if (!pattern.test(value)) {
      errorObj.lName = "Enter only alphabets";
      setError(errorObj);
      return false;
    }
    errorObj.lName = "";
    setError(errorObj);
    return true;
  };

  //email validation
  const handleEmailChange = (value) => {
    setEmail(value);
    let pattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    let errorObj = Object.assign({}, error);
    if (!pattern.test(value)) {
      errorObj.email = "Enter valid email address";
      setError(errorObj);
      return false;
    }
    errorObj.email = "";
    setError(errorObj);
    return true;
  };

  //password validation
  const handlePasswordChange = (value) => {
    setPassword(value);
    // let pattern = new RegExp(/^[A-Za-z0-9_@./!$%^~`*=|;:'",(){}#&+-]*$/);
    let pattern = new RegExp(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    );

    let errorObj = Object.assign({}, error);
    let len = value.length;
    if (len < 8) {
      errorObj.password = "Password should be minimum 8 characters";
      setError(errorObj);
      return false;
    }
    if (!pattern.test(value)) {
      errorObj.password =
        "Enter 1 uppercase, 1 lowercase and 1 special character";
      setError(errorObj);
      return false;
    }
    errorObj.password = "";
    setError(errorObj);
    return true;
  };

  //confirm password validation
  const handleCnfPasswordChange = (value, oldValue) => {
    setcnfPassword(value);
    let errorObj = Object.assign({}, error);
    if (value !== oldValue) {
      errorObj.cnfPassword = "Password and confirm password don't match";
      setError(errorObj);
      return false;
    }
    errorObj.cnfPassword = "";
    setError(errorObj);
    return true;
  };

  //required field validation
  const mandatoryFieldCheck = () => {
    let errorObj = Object.assign({}, error);

    let isEmpty = false;

    if (fName === "") {
      errorObj.fName = "First Name is required";
      setError(errorObj);
      isEmpty = true;
    }

    if (lName === "") {
      errorObj.lName = "Last Name is required";
      setError(errorObj);
      isEmpty = true;
    }

    if (email === "") {
      errorObj.email = "Email is required";
      setError(errorObj);
      isEmpty = true;
    }

    if (password === "") {
      errorObj.password = "Password is required";
      setError(errorObj);
      isEmpty = true;
    }

    if (cnfPassword === "") {
      errorObj.cnfPassword = "Confirm Password is required";
      setError(errorObj);
      isEmpty = true;
    }
    return isEmpty;
  };

  //on submit function call
  const handleSubmit = () => {
    if (mandatoryFieldCheck()) {
      return;
    }

    let errorObj = Object.assign({}, error);

    if (
      errorObj.fName ||
      errorObj.lName ||
      errorObj.email ||
      errorObj.password ||
      errorObj.cnfPassword
    ) {
      return;
    }

    const userProfileData = {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    };

    props.handleSignUp(userProfileData);
    //send data to next page if validation is correct
    // history.push({
    //   pathname: "/userdashboard-trips",
    //   state: userProfileData,
    // });
  };

  return (
    <Grid container>
      <Grid item xs={6} lg={6}>
        <Box
          component="img"
          sx={{
            height: 650,
            width: "100%",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
          alt="beach"
          src="https://www.publicdomainpictures.net/pictures/210000/nahled/boat-in-caribbean-1488476201AFb.jpg"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Container maxWidth="xs" style={containerStyle}>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Grid container spacing={3} pt={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="fName"
                  label="First Name"
                  name="fName"
                  value={fName}
                  onChange={(e) => handlefNameChange(e.target.value)}
                  autoComplete="fName"
                  color="secondary"
                  autoFocus
                  error={error.fName !== ""}
                  helperText={error.fName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lName"
                  label="Last Name"
                  name="lName"
                  value={lName}
                  onChange={(e) => handlelNameChange(e.target.value)}
                  color="secondary"
                  autoComplete="lName"
                  error={error.lName !== ""}
                  helperText={error.lName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  color="secondary"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  autoComplete="email"
                  error={error.email !== ""}
                  helperText={error.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  color="secondary"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  autoComplete="password"
                  error={error.password !== ""}
                  helperText={error.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  color="secondary"
                  id="confirmPassword"
                  value={cnfPassword}
                  onChange={(e) =>
                    handleCnfPasswordChange(e.target.value, password)
                  }
                  autoComplete="confirmPassword"
                  error={error.cnfPassword !== ""}
                  helperText={error.cnfPassword}
                />
              </Grid>
              {props.authMsg ? (
                <Grid item xs={12}>
                  <Alert severity="error">{props.authMsg}</Alert>{" "}
                </Grid>
              ) : (
                <></>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(e) => handleSubmit(e)}
                >
                  <Typography color="white">Sign Up</Typography>
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Link href="/login">
                  <Typography textAlign="center">
                    Already have an account ? Log In
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default RegisterComp;
