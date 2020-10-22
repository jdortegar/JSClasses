import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import Carta from "./components/Carta/Carta";
import Comments from "./components/Comments/Comments"
import {dataJson} from "../src/data.js"

import "antd/dist/antd.css";
import "./App.css";

function App() {
  console.log(dataJson);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Slider></Slider>
      <div className="style_card">
        <Carta 
        title={dataJson[0].title} 
        src={dataJson[0].variants[0].photos[0].formats.medium.url}
        description={'$'+ dataJson[0].price/100}
        //showbutton={true}
        showbutton={dataJson[0].variants.length>1?true:false}
        variantes={dataJson[0].variants}
        />

        <Carta title="This is the title"
         showbutton={true}/>
        <Carta src="https://a.wattpad.com/cover/178446982-352-k915396.jpg"/>
      </div>
      <Comments author="Kum Pao chicken"/>
    </div>
  );
}

export default App;
