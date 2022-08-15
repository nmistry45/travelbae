/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destinations
 */
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Filter from "../../containers/Filter";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/system";

/**
 *
 * @param {*} props
 * @returns a filter component with checkboxes which is displayed for mobile screens
 */
export default function FilterMenuComp(props) {
  const [travelBaeFilter, setTravelBaeFilterMenu] = React.useState(null);

  const handleOpenFiltervMenu = (event) => {
    setTravelBaeFilterMenu(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setTravelBaeFilterMenu(null);
  };
  return (
    <Toolbar sx={{ display: { xs: "inline-block", md: "inline-block" } }}>
      <Box sx={{ display: { xs: "flex", md: "flex" } }}>
        <IconButton
          size="large"
          aria-label="navigation links"
          aria-controls="menu-topnav"
          aria-haspopup="true"
          onClick={handleOpenFiltervMenu}
          color="secondary"
        >
          <FilterAltIcon />
        </IconButton>
        <Menu
          id="menu-topnav"
          anchorEl={travelBaeFilter}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(travelBaeFilter)}
          onClose={handleCloseFilterMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Filter filterProperties={props}></Filter>
        </Menu>
      </Box>
    </Toolbar>
  );
}
