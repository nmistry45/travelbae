import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid, Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import { Slider } from "@mui/material";


const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
];

function AccommodationSideBarFilter() {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="left"  sx={{ pl: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
        sx={{ pt: 2, pb: 1 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <FormGroup>
          <Typography>Guest Rating</Typography>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Any" />
          <FormControlLabel control={<Checkbox />} label="Wonderful 9+" />
          <FormControlLabel control={<Checkbox />} label="Very Good 8+" />
          <FormControlLabel control={<Checkbox />} label="Good 7+" />
          <Typography sx={{ pt: 1 }}>Property Type</Typography>
          <FormControlLabel control={<Checkbox />} label="Apartment" />
          <FormControlLabel control={<Checkbox />} label="Hotel Resort" />
          <FormControlLabel control={<Checkbox />} label="Hotel" />
          <Typography sx={{ pt: 1 }}>Price Range</Typography>
          <Box>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              defaultValue={[0, 100]}
              marks={marks}
            />
          </Box>
        </FormGroup>
      </Stack>
    </Grid>
  );
}

export default AccommodationSideBarFilter;
