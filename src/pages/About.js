import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-content">
      <Link to={"/"}>Retour</Link>
      <h1>Fanorona Malagasy</h1>
      <p>
        Une partie de Fanorona est une véritable partie de plaisir pour les
        ancêtres malgaches dans toutes les régions. Ce fut un de leurs
        passe-temps favoris. Vous trouverez une des plus anciennes gravures à
        Alasora (une commune au sud-est du centre-ville d’Antananarivo) qui date
        des années 1500 ou 1600.
      </p>
    </div>
  );
};

export default About;
