/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destinations
 */

const filterProperties = [
  {
    filterTitle: "Activities",
    key: "ACT",
    filterProperties: [
      {
        property: "Camping",
        key: "CA",
      },
      {
        property: "Hiking",
        key: "HI",
      },
      {
        property: "Fishing",
        key: "FI",
      },
    ],
  },
  {
    filterTitle: "Types",
    key: "TYP",
    filterProperties: [
      {
        property: "Beach",
        key: "BE",
      },
      {
        property: "Mountains",
        key: "MO",
      },
    ],
  },
];

export default filterProperties;
