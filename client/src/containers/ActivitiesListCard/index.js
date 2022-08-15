/**
 * Feature: Activities To Do
 * Task: Filter/Sort/Search
 * Author: Sangramsinh More
 */

import React from "react";
import ActivitiesCardComp from "../../components/ActivitiesCard";
import { Fragment } from "react";

/**
 * This page displays the activities list by calling the component
 * @param {*} props
 * @returns
 */
function ActivitiesListCard(props) {
  return (
    <Fragment>
      <ActivitiesCardComp
        image={props.image}
        title={props.title}
        desc={props.desc}
      />
    </Fragment>
  );
}

export default ActivitiesListCard;
