import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function NavBar() {
  const logo = process.env.PUBLIC_URL + "/logo.png";
  const navigate = useNavigate();

  const [boldItems, setBoldItems] = useState({
    features: false,
    aboutUs: false,
    trending: false,
  });

  function handleMouseOver(item) {
    setBoldItems((prev) => ({ ...prev, [item]: true }));
  }

  function handleMouseOut(item) {
    setBoldItems((prev) => ({ ...prev, [item]: false }));
  }

  return (
    <div className="Nav">
      <div className="company">
        <img
          src={logo}
          alt="coursecompass"
          id="compass"
          onClick={() => navigate("/")}
        />
        <p onClick={() => navigate("/")}>CourseCompass</p>
      </div>
      <div className="middle">
        <ul>
          <li
            className="nav-item"
            onMouseOver={() => handleMouseOver("features")}
            onMouseOut={() => handleMouseOut("features")}
            style={{ fontWeight: boldItems.features ? "bold" : null }}
          >
            Features
          </li>
          <li
            className="nav-item"
            onMouseOver={() => handleMouseOver("aboutUs")}
            onMouseOut={() => handleMouseOut("aboutUs")}
            style={{ fontWeight: boldItems.aboutUs ? "bold" : null }}
            onClick={() => navigate("/aboutus")}
          >
            About Us
          </li>
          <li
            className="nav-item"
            onMouseOver={() => handleMouseOver("trending")}
            onMouseOut={() => handleMouseOut("trending")}
            style={{ fontWeight: boldItems.trending ? "bold" : null }}
          >
            Trending
          </li>
        </ul>
      </div>
      <div className="right">
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}

export default NavBar;
