/**
 * Feature: Generic.
 * Author: Trushita Maurya
 */
import * as React from "react";
import { Box } from "@mui/material";
import AlertDialogComp from "../../components/AlertDialog";

/**
 * Description: Display alert Dialog
 * @param {*} props
 * @returns
 */
const AlertDialog = (props) => {
  return (
    <Box>
      <AlertDialogComp {...props} />
    </Box>
  );
};

export default AlertDialog;
