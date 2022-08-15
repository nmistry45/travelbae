/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 */
import React from "react";
import DescriptionListComp from "../../components/DescriptionList";

/**
 * Container that passes props received from the itinerary pages to display the list of content on the
 * Day Itinerary Page
 * @param {*} props
 * @returns
 */
function DescriptionList(props) {
  return (
    <>
      <DescriptionListComp
        image={props.image}
        title={props.title}
        desc={props.desc}
      />
    </>
  );
}

export default DescriptionList;
