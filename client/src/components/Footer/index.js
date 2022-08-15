import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function FooterComp(props) {
  //footer
  const { name, link } = props;
  return (
    <Grid textAlign="center" sx={{ pt: 1 }}>
      <Link to={link} style={{ color: "white", textDecoration: "none" }}>
        {name}
      </Link>
    </Grid>
  );
}

export default FooterComp;
