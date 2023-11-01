import React, { Fragment } from "react";
import './HomePage.css'
import Slider from '../body/slider.js';
import Intro from '../body/intro.js';
import ListSchool from "../body/list-school.js";
import Reason from "../body/reason.js";
import Social from "../body/social.js";
import Activity from "../body/activity.js";

function HomePage() {
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
        <div className="container">
          <Slider slides={slides}/>
        </div>
        <div>
          <Intro/>
        </div>
        <div>
          <ListSchool/>
        </div>
        <div>
          <Reason/>
        </div>
        <div>
          <Social/>
        </div>
        <div>
          <Activity/>
        </div>
      </Fragment>
  );
}

export default HomePage;
