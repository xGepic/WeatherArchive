import React from "react";
import "./style.css";

const Titel = () => {
  return (
    <div id="titeldiv">
      <h1 id="titel">Weather Archive</h1>
    </div>
  );
};

const Searchbar = () => {
  return (
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
  );
};

const LandingPage = () => {
  return (
    <>
      <Titel></Titel>
      <Searchbar></Searchbar>
    </>
  );
};

export default LandingPage;
