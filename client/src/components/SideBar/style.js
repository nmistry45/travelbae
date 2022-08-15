/**
 * Author: Smriti Mishra
 * Feature: UserDashboard
 */
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "&$selected": {
      backgroundColor: "#b2dfdb",
    },
    "&:hover": {
      backgroundColor: "#e0f2f1",
    },
    cursor: "pointer",
  },
}));
