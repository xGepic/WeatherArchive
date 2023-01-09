import React from "react";
import "./style.css";

const LandingPage = () => {
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
          />
          <button type="submit" id="searchButton">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default LandingPage;
