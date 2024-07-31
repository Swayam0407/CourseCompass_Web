import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Lheading from "./components/Lheading";
import LoginPage from "./components/LoginPage";
import AboutUs from "./components/AboutUs";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Lheading />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/trending" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
