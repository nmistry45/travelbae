import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function VerticalDisplayCardComp(props) {
  return (
    <Grid container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Box
            component="img"
            sx={{
              height: '100',
              width: '100%',
              borderRadius:2,
            }}
            title={props.name}
            alt="The house from the offer."
            src={props.image}
          />
        </Grid>
        <Grid item xs={12}>
          <Box component="span" color="black" sx={{ fontFamily: "Open Sans", fontWeight: "bold" ,fontSize: 16, mt: 1 }}>
          {props.name}
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Grid>
  );
}
