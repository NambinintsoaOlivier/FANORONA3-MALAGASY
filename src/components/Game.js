import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Game.css";
import Vato from "./Vato";
import PopupVictoire from "./PopupVictoire";

const Game = () => {
  //  les variables
  const p1 = <div className="vato1"></div>; //DernierColorSelected jaune
  const p2 = <div className="vato2"></div>; //DernierColorSelected rouge
  const none = ""; // vide
  const [NumCage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); //numero des cages d'emplacement Vato
  const [ReinitialiseVato] = useState([
    { id: 1, vatoCouleur: p1 },
    { id: 2, vatoCouleur: p1 },
    { id: 3, vatoCouleur: p1 },
    { id: 4, vatoCouleur: none },
    { id: 5, vatoCouleur: none },
    { id: 6, vatoCouleur: none },
    { id: 7, vatoCouleur: p2 },
    { id: 8, vatoCouleur: p2 },
    { id: 9, vatoCouleur: p2 },
  ]); //debut du jeu
  const [vato, setVato] = useState(ReinitialiseVato); // dans le jeu
  const [PrecedentVato, setPrecedentVato] = useState(vato); // precedent vato
  const [vatoSelectedChange, setVatoSelectedChange] = useState();
  const [nbClick, setNbClick] = useState(0); //nombre de clicks
  const [DernierColorSelected, setCouleur] = useState(p2); // dernier couleur selectionné
  const [Cage, setCage] = useState();
  const [popup, setPopup] = useState(true);
  const [vainqueur, setVainqueur] = useState(none);
  const [tour, setTour] = useState();
  const [tourPlayer, setTourPlayer] = useState(1);

  // les functions
  useEffect(() => {
    Victoir(vato);
  }, [vato]);
  function tourP() {
    if (tourPlayer === 1) {
      setTour(true);
      setTourPlayer(0);
    } else {
      setTour(false);
      setTourPlayer(1);
    }
  }
  function Victoir(vato) {
    const ligne = [
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [3, 4, 5],
    ];
    for (let i = 0; i < ligne.length; i++) {
      const [a, b, c] = ligne[i];

      if (
        vato[a].vatoCouleur === vato[b].vatoCouleur &&
        vato[b].vatoCouleur === vato[c].vatoCouleur &&
        vato[b].vatoCouleur !== none
      ) {
        setVainqueur(vato[a].vatoCouleur);
        setPopup(false);
        return;
      }
    }
  }
  function reinitialiser() {
    setVato(ReinitialiseVato);
    setPopup(true);
  }
  function copier(i) {
    //copier le taloha
    const vatoCopy = [...vatoSelectedChange];

    // de modifiena le copie
    vatoCopy[i] = { id: i + 1, vatoCouleur: DernierColorSelected };

    // mis à jour anilay vato rehetra
    setVato(vatoCopy);
    setNbClick(0);
    tourP();
  }
  function badPlace() {
    setNbClick(0);
    setVato(PrecedentVato);
    setCouleur(none);
  }
  function SelectVato(i) {
    //copier le taloha
    const vatoCopy = [...vato];
    // de modifiena le copie
    vatoCopy[i] = { id: i + 1, vatoCouleur: none };

    setVatoSelectedChange(vatoCopy);
    setCage(NumCage[i]);
    setCouleur(vato[i].vatoCouleur);
    setNbClick(1);
  }
  // click sur les vatos
  function handleClick(i) {
    // pour enregistrer la derniere modification
    const DerniervatoCopy = [...vato];
    setPrecedentVato(DerniervatoCopy);

    // vao miclick vato voalohany
    if (nbClick === 0) {
      // teste si la premiere click est sur une zone vide
      if (vato[i].vatoCouleur === none) {
        console.log("safidio ilay vato afindra");
      } else {
        // teste DernierColorSelected
        if (DernierColorSelected === vato[i].vatoCouleur) {
          console.log("tsy toriny zao");
        } else {
          SelectVato(i);
        }
      }
    } else {
      if (
        // vato[i].vatoCouleur !== none &&
        DernierColorSelected === vato[i].vatoCouleur
      ) {
        console.log("miova le selection");
        SelectVato(i);
      } else {
        if (
          vato[i].vatoCouleur !== none &&
          DernierColorSelected !== vato[i].vatoCouleur
        ) {
          setNbClick(0);
          setCouleur(vato[i].vatoCouleur);
        } else {
          setVato(vatoSelectedChange);
          if (Cage === 1) {
            if (NumCage[i] === 2 || NumCage[i] === 4 || NumCage[i] === 5) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 2) {
            if (NumCage[i] === 1 || NumCage[i] === 3 || NumCage[i] === 5) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 3) {
            if (NumCage[i] === 2 || NumCage[i] === 5 || NumCage[i] === 6) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 4) {
            if (NumCage[i] === 1 || NumCage[i] === 5 || NumCage[i] === 7) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 5) {
            if (
              NumCage[i] === 1 ||
              NumCage[i] === 2 ||
              NumCage[i] === 3 ||
              NumCage[i] === 4 ||
              NumCage[i] === 6 ||
              NumCage[i] === 7 ||
              NumCage[i] === 8 ||
              NumCage[i] === 9
            ) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 6) {
            if (NumCage[i] === 3 || NumCage[i] === 5 || NumCage[i] === 9) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 7) {
            if (NumCage[i] === 4 || NumCage[i] === 5 || NumCage[i] === 8) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 8) {
            if (NumCage[i] === 7 || NumCage[i] === 5 || NumCage[i] === 9) {
              copier(i);
            } else {
              badPlace();
            }
          }
          if (Cage === 9) {
            if (NumCage[i] === 5 || NumCage[i] === 8 || NumCage[i] === 6) {
              copier(i);
            } else {
              badPlace();
            }
          }
        }
      }
    }
    setCage(NumCage[i]);
  }

  return (
    <>
      <Link to={"/"}>Retour</Link>
      <div className={`cadre-popup ${popup ? "none" : ""}`}>
        <PopupVictoire rejouer={reinitialiser} vainqueur={vainqueur} />
      </div>

      <div className="game-all">
        <div className="Joueur">
          Joueur 1 : {p1}
          <div className={`tour ${tour ? "none" : ""}`}></div>
        </div>
        <div className="container-cadre">
          <div className="cadre">
            <div className="cadre-element">
              <Vato
                NumCage={NumCage[1]}
                key={vato[0].id}
                value={vato[0].vatoCouleur}
                CopieColler={() => handleClick(0)}
              />
              <Vato
                NumCage={NumCage[2]}
                key={vato[1].id}
                value={vato[1].vatoCouleur}
                CopieColler={() => handleClick(1)}
              />
              <Vato
                NumCage={NumCage[3]}
                key={vato[2].id}
                value={vato[2].vatoCouleur}
                CopieColler={() => handleClick(2)}
              />
            </div>
            <div className="cadre-element">
              <Vato
                NumCage={NumCage[4]}
                key={vato[3].id}
                value={vato[3].vatoCouleur}
                CopieColler={() => handleClick(3)}
              />
              <Vato
                NumCage={NumCage[5]}
                key={vato[4].id}
                value={vato[4].vatoCouleur}
                CopieColler={() => handleClick(4)}
              />
              <Vato
                NumCage={NumCage[6]}
                key={vato[5].id}
                value={vato[5].vatoCouleur}
                CopieColler={() => handleClick(5)}
              />
            </div>
            <div className="cadre-element">
              <Vato
                NumCage={NumCage[7]}
                key={vato[6].id}
                value={vato[6].vatoCouleur}
                CopieColler={() => handleClick(6)}
              />
              <Vato
                NumCage={NumCage[8]}
                key={vato[7].id}
                value={vato[7].vatoCouleur}
                CopieColler={() => handleClick(7)}
              />
              <Vato
                NumCage={NumCage[9]}
                key={vato[8].id}
                value={vato[8].vatoCouleur}
                CopieColler={() => handleClick(8)}
              />
            </div>
          </div>
        </div>
        <div className="Joueur">
          Joueur 2 : {p2}
          <div className={`tour ${tour ? "" : "none"}`}></div>
        </div>
      </div>
    </>
  );
};

export default Game;
