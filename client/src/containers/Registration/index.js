/**
 * Author: Trushita Maurya
 * Feature: User Management
 * Task: Registration
 *
 */
import React, { useContext, useState } from "react";
import RegisterComp from "../../components/Registration";
import { BACKEND_URL } from "../../config";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

/**
 * Description: Business logic to communicate with node js to register new user
 * @returns
 */
function RegisterUser() {
  const history = useHistory();
  const userId = useContext(AuthContext);
  const [authMsg, setAuthMsg] = useState("");
  const handleSignUp = (userProfileData) => {
    const url = `${BACKEND_URL}/user/signUp`;
    axios
      .post(url, userProfileData)
      .then((res) => {
        setAuthMsg("");
        history.push("/login");
      })
      .catch((e) => {
        setAuthMsg("User Already Exists!");
      });
  };
  return (
    <>
      <RegisterComp handleSignUp={handleSignUp} authMsg={authMsg} />
    </>
  );
}

export default RegisterUser;
