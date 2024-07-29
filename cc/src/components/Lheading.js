import React from "react";
import { useNavigate } from 'react-router-dom';

function Lheading() {
  const navigate = useNavigate();
  const Dashpage = process.env.PUBLIC_URL + "/Dashpage.png";
  

  return (
    <div className="Text">
      <div className="words">
        <p>An AI tool made for ranking courses</p>
        <div className="eff">
          <h1 id="above">Determine the best</h1>
          <h1 id="below">
            course for you <span>using AI</span>
          </h1>
        </div>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>Create account</button>
      </div>
      <div className="dashboardimg">
        <img src={Dashpage} alt="dashboard" />
      </div>
    </div>
  );
}

export default Lheading;
