/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destinations
 */
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import AlertDialog from "../AlertDialog";

/**
 *
 * @param {*} props
 * @returns a filter component with checkboxes and clear button which is displayed for web screens
 */
const FilterComp = (props) => {
  const [clearAll, setClearAll] = React.useState(true);
  const [checkedItems, setCheckedItems] = React.useState([]);

  const [open, setOpen] = useState(false); // for alert box

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (index) => {
    const newItems = [...checkedItems];
    const position = newItems.findIndex((item) => item === index);
    if (position !== -1) {
      newItems.splice(position, 1);
    } else {
      newItems.push(index);
      setClearAll(false);
    }
    setCheckedItems(newItems);
    props.handleChange(newItems);
  };
  const handleClearAll = () => {
    setClearAll(true);
    setCheckedItems([]);
    props.handleClearAll();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography gutterBottom variant="h5" component="div">
        Filter By
      </Typography>

      {props.filterProperty.filterProperties.length > 0
        ? props.filterProperty.filterProperties.map((section) => {
            return (
              <div>
                <Typography
                  gutterBottom
                  variant="overline"
                  component="div"
                  sx={{ marginTop: "20px" }}
                  key={section.key}
                >
                  {section.filterTitle}
                </Typography>
                <Divider />
                {section.filterProperties.map((property) => {
                  return (
                    <FormGroup key={property.key}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="secondary"
                            checked={
                              !clearAll &&
                              checkedItems.findIndex(
                                (item) => item === property.property
                              ) !== -1
                                ? true
                                : false
                            }
                            onChange={() => handleChange(property.property)}
                          />
                        }
                        label={property.property}
                      />
                    </FormGroup>
                  );
                })}
              </div>
            );
          })
        : props.filterProperty.filterProperties.filterProperty.filterProperties.map(
            (section) => {
              return (
                <div>
                  <Typography
                    gutterBottom
                    variant="overline"
                    component="div"
                    sx={{ marginTop: "20px" }}
                    key={section.key}
                  >
                    {section.filterTitle}
                  </Typography>
                  <Divider />
                  {section.filterProperties.map((property) => {
                    return (
                      <FormGroup key={property.key}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              checked={
                                !clearAll &&
                                checkedItems.findIndex(
                                  (item) => item === property.property
                                ) !== -1
                                  ? true
                                  : false
                              }
                              onChange={() => handleChange(property.property)}
                            />
                          }
                          label={property.property}
                        />
                      </FormGroup>
                    );
                  })}
                </div>
              );
            }
          )}
      <Box pt={2}>
        <Button variant="contained" onClick={handleClearAll}>
          Clear All
        </Button>
      </Box>

      <AlertDialog
        open={open}
        title="Confirm"
        message="API Logic Required to Filter"
        handleClose={handleClose}
        buttons={["Cancel", "Ok"]}
      />
    </div>
  );
};

export default FilterComp;
