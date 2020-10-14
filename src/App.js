import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import Carta from "./components/Carta/Carta";
import Comments from "./components/Comments/Comments"

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Slider></Slider>
      <div className="style_card">
        <Carta />
        <Carta />
        <Carta />
      </div>
      <Comments></Comments>
    </div>
  );
}

export default App;
