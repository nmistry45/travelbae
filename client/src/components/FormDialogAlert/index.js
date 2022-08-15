import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import {
  confirmPwdValidator,
  passwordValidator,
} from "../../utils/validations";

export default function FormDialogComp(props) {
  const { open, handleClose, handleSubmitForm, isUserPopUp, alertMsg } = props;
  const [inputPwdValues, setInputPwdValue] = useState({
    cPassword: "",
    nPassword: "",
    confPassword: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [validation, setValidation] = useState({
    errorMsg: "",
  });

  const clearAll = () => {
    setInputPwdValue({ cPassword: "", nPassword: "", confPassword: "" });
  };

  const handleCloseForm = (formName) => {
    setValidation({ errorMsg: "" });
    handleClose();
  };

  const handleSubmit = (formName) => {
    if (checkValidation() && formName === "pwdForm") {
      handleSubmitForm(inputPwdValues);
      clearAll();
    }
    return;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputPwdValue({ ...inputPwdValues, [name]: value });
    setValidation({ errorMsg: "" });
  };

  const checkValidation = () => {
    let errors = Object.assign({}, validation);

    //password validation

    const pwdCurrentValidate = passwordValidator(inputPwdValues.cPassword);
    const pwdNewValidate = passwordValidator(inputPwdValues.nPassword);

    if (!pwdCurrentValidate.isValid) {
      errors.errorMsg = pwdCurrentValidate.errorMsg;
      setValidation(errors);
      return false;
    } else {
      errors.errorMsg = "";
    }
    if (!pwdNewValidate.isValid) {
      errors.errorMsg = pwdNewValidate.errorMsg;
      setValidation(errors);
      return false;
    } else {
      errors.errorMsg = "";
    }

    //confirm password validation

    const pwdConfValidate = confirmPwdValidator(
      inputPwdValues.confPassword,
      inputPwdValues.nPassword
    );

    if (!pwdConfValidate.isValid) {
      errors.errorMsg = pwdConfValidate.errorMsg;
      // return false;
    } else {
      errors.errorMsg = "";
    }

    setValidation(errors);
    if (Object.values(errors).every((value) => value === "")) {
      return true;
    } else {
      return false;
    }
  };

  const displayDialog = () => {
    if (isUserPopUp) {
      return (
        <>
          <Box pl={2} pr={2}>
            <Typography variant="body2">Current Password</Typography>
            <TextField
              autoFocus
              id="cPassword"
              name="cPassword"
              type="password"
              fullWidth
              variant="standard"
              values={inputPwdValues.cPassword}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box pt={3} pl={2} pr={2}>
            <Typography variant="body2">New Password</Typography>
            <TextField
              id="nPassword"
              name="nPassword"
              type="password"
              fullWidth
              variant="standard"
              values={inputPwdValues.nPassword}
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Box pt={3} pl={2} pr={2}>
            <Typography variant="body2">Confirm New Password</Typography>
            <TextField
              id="confPassword"
              name="confPassword"
              type="password"
              fullWidth
              variant="standard"
              values={inputPwdValues.confPassword}
              onChange={(e) => handleChange(e)}
            />
          </Box>
        </>
      );
    }
  };
  return (
    <Box>
      <Dialog fullWidth="70%" open={open} onClose={handleClose}>
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent>
          <Box pb={2}>
            <Divider />
          </Box>
          {validation.errorMsg && (
            <Box pb={4}>
              <Alert severity="error">{validation.errorMsg}</Alert>
            </Box>
          )}

          {alertMsg.error && (
            <Box pb={4}>
              <Alert severity="error">{alertMsg.error}</Alert>
            </Box>
          )}
          {alertMsg.message && (
            <Box pb={4}>
              <Alert severity="success">{alertMsg.message}</Alert>
            </Box>
          )}

          {displayDialog()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} variant="contained">
            Cancel
          </Button>
          <Button onClick={(e) => handleSubmit("pwdForm")} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
