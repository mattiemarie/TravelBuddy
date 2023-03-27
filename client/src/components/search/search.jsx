import React, { useState } from "react";
import "../search/search.css";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search({startDate,endDate, requesting, onSearchChange, onSubmit}) {
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  console.log(selectionRange);
  return (
    <div className="search-container">
      <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={(ranges) => onSearchChange(ranges)} />
        <h2>
          Number of Guests
          <PeopleIcon />
          <input min={0} defaultValue={2} type="number" />
        </h2>
        <Button onClick={onSubmit} disabled={requesting}>
          Search 
        </Button>
      </div>
    </div>
  );
}

export default Search;
