import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toImageComponent = () => {
    if (searchTerm.trim().length === 0) {
      alert("Please enter a Search Term!");
      return;
    }
    navigate("/image", { state: searchTerm });
  };

  function RenderPage() {
    return (
      <div>
        <div id="titeldiv">
          <h1 id="titel">Weather Archive</h1>
        </div>
        <div id="wrapper">
          <div id="searchBarDiv">
            <input
              type="text"
              id="search-bar"
              placeholder="Search the Archive"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div id="buttonDiv">
              <button id="searchButton" onClick={toImageComponent}>
                Search
              </button>
            </div>
          </div>
          <div>
            <Link to="/video">
              <button id="videoPageButton">Video</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return RenderPage();
};

export default LandingPage;
