import React from "react";
import "./homepage.styles.scss";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="homepage">
    <h1>
      <Link to="/login">Log in</Link>
    </h1>
  </div>
);

export default HomePage;
