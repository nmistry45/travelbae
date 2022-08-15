import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "contain",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    paddingBottom: "1rem",
    cursor: "pointer",
  },
  media: {
    objectFit: "scale-down",
    height: "50%",
    alignItems: "center",
    width: "50%",
  },
  actionArea: {
    display: "flex",
  },
  cardFooter: {
    justifyContent: "center",
  },
}));
