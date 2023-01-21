import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  const [searchInput, getSearchInput] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const MakeLamdaCall = () => {
    axios
      .get(
        "https://random.imagecdn.app/v1/image?width=500&height=150&category=" +
          { searchInput } +
          "&format=image",
        {
          responseType: "arraybuffer",
        }
      )
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const src = `data:${response.headers["content-type"]};base64,${base64}`;
        setImageSrc(src);
      })
      .catch((error) => console.log(error));
  };

  function RenderPage() {
    return (
      <div>
        <div id="titeldiv">
          <h1 id="titel">Weather Archive</h1>
        </div>
        <div id="wrapper">
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
            </form>
            <div id="buttonDiv">
              <button onClick={MakeLamdaCall} id="searchButton">
                Search
              </button>
            </div>
          </div>
          <div id="imgDiv">
            {imageSrc && (
              <div>
                <img src={imageSrc} alt="Img from API" />
              </div>
            )}
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
