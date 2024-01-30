import React, { useState } from "react";

const Vato = ({ value, CopieColler, NumCage }) => {
  return (
    <button className="cadre-item " onClick={CopieColler} key={NumCage}>
      {value}
    </button>
  );
};

export default Vato;
