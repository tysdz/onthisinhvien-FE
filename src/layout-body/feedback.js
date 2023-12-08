import React, { useState } from "react";
import "./feedback.scss";

function Feedback() {
    return(
       <div>
        <div className="feedback-course">
            <h3>Phản hồi của học viên kỳ trước</h3>
            <div className="feedback-cou-img">
                <div className="fb-img">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2Ffeedback%2Fneu%2F1.png&w=1920&q=75"></img>
                </div>
                <div className="fb-img">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2Ffeedback%2Fneu%2F2.png&w=1920&q=75"></img>
                </div>
                <div className="fb-img">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2Ffeedback%2Fneu%2F3.png&w=1920&q=75"></img>
                </div>
                <div className="fb-img">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2Ffeedback%2Fneu%2F4.png&w=1920&q=75"></img>
                </div>
            </div>
            <div className="next-feedback-cou">
                <div className="list-feedback-cou">1</div>
                <div className="list-feedback-cou">2</div>
                <div className="list-feedback-cou">3</div>
                <div className="list-feedback-cou">4</div>
            </div>
        </div>
        <div className="overview">
            <h3>ÔN THI SINH VIÊN</h3>
            <h3>THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN</h3>
            <div className="bottom-overview">
                <div className="box-overview">
                    <div className="circle-overview">
                        <img src="https://onthisinhvien.com/images/icon/otsv/school-icon/khoa-luyen.svg" className="small"></img>
                    </div>
                    <div className="number-count-overview">
                        <span>150</span>
                    </div>
                    <div className="class-count-overview">Khóa luyện</div>
                </div>
                <div className="box-overview">
                    <div className="circle-overview">
                        <img src="https://onthisinhvien.com/images/icon/otsv/school-icon/hocvien.svg" className="small"></img>
                    </div>
                    <div className="number-count-overview">
                        <span>80</span>
                    </div>
                    <div className="class-count-overview">Khá giỏi</div>
                </div>
                <div className="box-overview">
                    <div className="circle-overview">
                        <img src="https://onthisinhvien.com/images/icon/otsv/school-icon/kha-gioi.svg" className="small"></img>
                    </div>
                    <div className="number-count-overview">
                        <span>500</span>
                    </div>
                    <div className="class-count-overview">9-10 điểm</div>
                </div>
                <div className="box-overview">
                    <div className="circle-overview">
                        <img src="https://onthisinhvien.com/images/icon/otsv/school-icon/feebb.svg" className="small"></img>
                    </div>
                    <div className="number-count-overview">
                        <span>100</span>
                    </div>
                    <div className="class-count-overview">Feedback</div>
                </div>
                <div className="box-overview">
                    <div className="circle-overview">
                        <img src="https://onthisinhvien.com/images/icon/otsv/school-icon/kha-gioi.svg" className="small"></img>
                    </div>
                    <div className="number-count-overview">
                        <span>30k</span>
                    </div>
                    <div className="class-count-overview">Thành viên</div>
                </div>
            </div>
        </div>
       </div> 
    )
}

export default Feedback;