/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Search for destination.
 */

import React from "react";
import SearchComp from "../../components/Search";

/**
 *
 * Description: This function calls the search component that contains the logic.
 */
function SearchCont({ onEvent }) {
  return (
    <>
      <SearchComp onEvent={onEvent} />
    </>
  );
}

export default SearchCont;
