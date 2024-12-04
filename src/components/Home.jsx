import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page!</h1>
        <p>This is a simple login and registration application.</p>
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
