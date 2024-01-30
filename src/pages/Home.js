import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="menu">
      <h1 style={{ marginTop: "30px", fontSize: "40px", textAlign: "center" }}>
        FANORONA MALAGASY
      </h1>
      <Link to={"/game"} className="menu-item">
        Jouer
      </Link>
      <Link to={"/about"} className="menu-item">
        A propos
      </Link>
      <Link className="menu-item">Aide</Link>
    </div>
  );
};

export default Home;
