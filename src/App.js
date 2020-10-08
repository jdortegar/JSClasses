import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Slider></Slider>
    </div>
  );
}

export default App;
