import React, { Fragment } from "react";
import './CoursePage.scss'
import Slider from '../layout-course/slider';
import Allcourse from "../layout-course/all-course";

function CoursePage() {
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
            <Allcourse/>
        </div>
        
      </Fragment>
  );
}

export default CoursePage;
