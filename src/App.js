import "./App.css";
import logo from "./imagenes/logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={logo} className="freecodecamp-logo" alt="" />
      </div>
      <div className="contador-contenedor">
        <Contador numClicks={numClicks} />
        <Boton texto="Click" esBotonDeClic={true} manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
