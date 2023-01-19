import React from "react";
import { useState } from "react";
import "./style.css";

const LandingPage = () => {
  const [searchInput, getSearchInput] = useState("");

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
          <button
            type="submit"
            id="searchButton"
            onClick={() => alert(searchInput)}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default LandingPage;
