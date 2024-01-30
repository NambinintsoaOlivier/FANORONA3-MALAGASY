import React from "react";
import "../styles/Popup.css";

const PopupVictoire = ({ vainqueur, rejouer }) => {
  return (
    <>
      <div className="cadre-popup-item">
        <h1>Victoire au :</h1>
        <p>{vainqueur}</p>
        <button className="btn-rejouer" onClick={rejouer}>
          Rejouer
        </button>
      </div>
    </>
  );
};

export default PopupVictoire;
