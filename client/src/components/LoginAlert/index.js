import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Divider } from "@mui/material";

// By default the button labels are - cancel and ok
const LoginAlertComp = (props) => {
  const { open, handleClose } = props;

  const handleCloseLogin = () => {
    props.handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add to Plan</DialogTitle>
        <DialogContent>
          <Box pb={2}>
            <Divider />
          </Box>
          <DialogContentText id="alert-dialog-description">
            Please log in to add to your plan.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin} variant="contained">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginAlertComp;
