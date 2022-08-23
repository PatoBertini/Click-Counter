import React from "react";
import '../styles/Boton.css'

const Boton = ({ texto, esBotonDeClic, manejarClick }) => {
  return (
    <button
      className={esBotonDeClic ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
