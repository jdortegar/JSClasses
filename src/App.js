import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import Carta from "./components/Carta/Carta";
import Comments from "./components/Comments/Comments";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Slider></Slider>
      <div className="style_card">
        <Carta
          title="ejemplo"
          alt="foto"
          src="https://okdiario.com/img/2020/03/20/tendencias-en-moda-para-la-primavera-2020.jpg"
          href="https://www.clarin.com/"
        />
        <Carta
          title="ekemplo2"
          alt="foto2"
          src="https://image.freepik.com/vector-gratis/fondo-navidad-diseno-plano_52683-47611.jpg"
          href="https://www.google.com/"
        />
        <Carta
          title="ekemplo3"
          alt="foto2"
          src="https://image.freepik.com/vector-gratis/fondo-navideno-dibujado-mano-santa-regalos_23-2148670442.jpg"
          href="https://www.xvideo.com/"
        />
      </div>
      <Comments></Comments>
    </div>
  );
}

export default App;
