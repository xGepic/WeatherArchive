import React from "react";
import { useState } from "react";
import "./style.css";

const LandingPage = () => {
  const [searchInput, getSearchInput] = useState("");

  const MakeLamdaCall = () => {
    alert(searchInput);
  };

  return (
    <>
      <div id="titeldiv">
        <h1 id="titel">Weather Archive</h1>
      </div>
      <div id="searchBarDiv">
        <form action="/" method="get">
          <input
            type="text"
            id="search-bar"
            placeholder="Search the Archive"
            name="s"
            value={searchInput}
            onChange={(e) => getSearchInput(e.target.value)}
          />
          <button type="submit" id="searchButton" onClick={MakeLamdaCall}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default LandingPage;
