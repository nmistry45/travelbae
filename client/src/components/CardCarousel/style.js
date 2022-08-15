import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
  paper: {
    width: 300,
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },
  typo: {
    textAlign: "center",
  },
  mx: {
    margin: "6px 0px",
  },
  card: {
    width: 300,
  },
  cardImgText: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "white",
    maxWidth: "100%",
  },
  cardImgTextColor: {
    color: "white",
  },
});

export default useStyles;
