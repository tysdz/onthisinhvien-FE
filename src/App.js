import React, { Fragment } from "react";
import './App.css'
import Header from './header/header.js'
import Slider from './body/slider.js'
import Intro from './body/intro.js'
import ListSchool from "./body/list-school";

function App() {
  const slides = [
    'slider-1.jpg',
    'slider-2.jpg',
    'slider-3.jpg',
    'slider-4.jpg',
    'slider-5.jpg',
    'slider-6.jpg',
    'slider-7.jpg',
    'slider-8.jpg',
    'slider-9.jpg'
    // Thêm đường dẫn đến các ảnh khác ở đây
  ];

  return (
    <Fragment>
      <Header/>
      <div className="container">
        <Slider slides={slides}/>
      </div>
      <div>
        <Intro/>
      </div>
      <div>
        <ListSchool/>
      </div>
      
    </Fragment>
  );
}

export default App;
