/**
 * Author: Trushita Maurya
 * Feature: User Management
 * Task: User Login
 */
import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "@material-ui/core";
import AlertDialog from "../../containers/AlertDialog";
import { AuthContext } from "../../context/AuthContext";

/**
 * Renders Login UI
 * @param {*} props
 * @returns
 */
function LoginComp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false); // for alert box
  const loginVal = props.loginCredsError;
  // const [loginVal, setLoginVal] = useState(props.loginCredsError);
  const handleClose = () => {
    setOpen(false);
  };
  const containerStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  //error handling
  const [error, setError] = useState({
    email: "",
    password: "",
  });

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

    let pattern = new RegExp(/^[A-Za-z0-9_@./!$%^~`*=|;:'",(){}#&+-]*$/);
    let errorObj = Object.assign({}, error);
    let len = value.length;
    if (len < 8) {
      errorObj.password = "Password will be minimum 8 characters";
      setError(errorObj);
      return false;
    }
    if (!pattern.test(value)) {
      errorObj.password = "Enter valid password";
      setError(errorObj);
      return false;
    }
    errorObj.password = "";
    setError(errorObj);
    return true;
  };

  //required field validation
  const mandatoryFieldCheck = () => {
    let errorObj = Object.assign({}, error);

    let isEmpty = false;

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
    return isEmpty;
  };

  const handleSubmit = () => {
    if (mandatoryFieldCheck()) {
      return;
    }

    let errorObj = Object.assign({}, error);

    if (errorObj.email || errorObj.password) {
      return;
    }

    const userData = { email, password };
    // setOpen(true);
    props.handleLogin(userData);
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
          src="https://cdn.pixabay.com/photo/2020/03/01/08/52/sea-4892044_1280.jpg"
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
              Log In
            </Typography>
            <Grid container spacing={3} pt={2}>
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
                {loginVal && (
                  <Typography color="#d32f2f" variant="caption">
                    {loginVal}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                  onClick={(e) => handleSubmit(e)}
                >
                  <Typography color="white">Log In</Typography>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href="/register">
                  <Typography textAlign="center">
                    Don't have an account ? Sign Up
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Confirm"
          message="API logic required to Save"
          handleClose={handleClose}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
    </Grid>
  );
}

export default LoginComp;
