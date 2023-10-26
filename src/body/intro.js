import React, { useState } from "react";
import "./intro.css";

function Intro() {
    return(
       <div className="top-intro">
        <h4>ÔN THI SINH VIÊN - THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN</h4>
        <div className="bottom-intro">
            <div className="box">
                <div className="circle">
                    <img src="https://onthisinhvien.com/images/icon/otsv/nam.svg " className="small"></img>
                </div>
                <div className="number-count">
                   <span>9</span>
                    <div>+</div> 
                </div>
                <div className="class-count">Năm</div>
            </div>
            <div className="box">
                <div className="circle">
                <img src="https://onthisinhvien.com/images/icon/otsv/truong.svg" className="small"></img>
                </div >
                <div className="number-count">
                   <span>20</span>
                    <div>+</div> 
                </div>
                <div className="class-count">Trường</div>
            </div>
            <div className="box">
                <div className="circle">
                <img src="https://onthisinhvien.com/images/icon/otsv/khoa-luyen.svg" className="small"></img>
                </div>
                <div className="number-count">
                   <span>400</span>
                    <div>+</div> 
                </div>
                <div className="class-count">Khóa học</div>
            </div>
            <div className="box">
                <div className="circle">
                <img src="https://onthisinhvien.com/images/icon/otsv/hocvien.svg" className="small"></img>
                </div>
                <div className="number-count">
                   <span>200</span>
                    <div>k+</div> 
                </div>
                <div className="class-count">Học viên</div>
            </div>
            <div className="box">
                <div className="circle">
                <img src="https://onthisinhvien.com/images/icon/otsv/fireStar.svg" className="small"></img>
                </div>
                <div className="number-count">
                   <span>25</span>
                    <div>k</div> 
                </div>
                <div className="class-count">Đánh giá</div>
            </div>
            <div className="box">
                <div className="circle">
                <img src="https://onthisinhvien.com/images/icon/otsv/hai-long.svg" className="small"></img>
                </div>
                <div className="number-count">
                   <span>99</span>
                    <div>%</div> 
                </div>
                <div className="class-count">Qua môn</div>
            </div>
        </div>
       </div> 
    )
}

export default Intro;