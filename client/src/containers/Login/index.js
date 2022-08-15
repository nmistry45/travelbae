/**
 * Author: Trushita Maurya
 * Feature: User Management
 * Task: User Login
 */

import React, { useContext, useState } from "react";
import LoginComp from "../../components/Login";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

/**
 * Business Logic to process login credentials
 * @param {*} props
 * @returns
 */
function LoginUser(props) {
  const auth = useContext(AuthContext);
  const [loginCredsError, setLoginCredsError] = useState("");
  const history = useHistory();
  const handleLogin = (userInfo) => {
    const url = `${BACKEND_URL}/user/login`;
    axios
      .post(url, userInfo)
      .then((res) => {
        auth.login(userInfo.email, res.data.token);
        setLoginCredsError("");
        history.push("/");
      })
      .catch((e) => {
        setLoginCredsError("Incorrect credentials");
      });
  };
  return (
    <>
      <LoginComp handleLogin={handleLogin} loginCredsError={loginCredsError} />
    </>
  );
}

export default LoginUser;
