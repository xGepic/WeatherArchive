import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://your-api-endpoint.com`, {
      params: {
        search: searchTerm,
      },
    });
    setImages(response.data);
  };

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
            <button onClick={handleSearch} id="searchButton">
              Search
            </button>
          </div>
        </div>
        <div id="imgDiv">
          {images.map((image) => (
            <img
              key={image.id}
              src={`data:${image.mimetype};base64, ${image.data}`}
              alt={image.description}
            />
          ))}
        </div>
        <div>
          <Link to="/video">
            <button id="videoPageButton">Video</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
