import React, { useState } from "react";
import "./reason.css";

function Reason() {
    return(
       <div className="top-reason">
        <h2>VÌ SAO HƠN 200,000 BẠN CHỌN</h2>
        <h2>ONTHISINHVIEN.COM</h2>
        <p>Bí quyết chinh phục điểm A các môn đại cương và chuyên ngành</p>
        <div className="bottom-reason">
            <div className="box-reason">
                <div className="cir-reason">
                    <img src="https://onthisinhvien.com/images/icon/otsv/icon1-why-choose.svg " className="small"></img>
                </div>
                <div className="ques-ans">
                    <div>
                        <p className="ques">Em không biết môn này học cái gì?</p>
                    </div> 
                </div>
                <div className="ans">Đừng lo, Khóa luyện sẽ "Review đề thi" lại cho em, đề thi có bao nhiêu câu, rơi vào những phần kiến thức nào,...</div>
            </div>
            <div className="box-reason">
                <div className="cir-reason">
                    <img src="https://onthisinhvien.com/images/icon/otsv/icon2-why-choose.svg " className="small"></img>
                </div>
                <div className="ques-ans">
                    <div>
                        <p className="ques">Em không biết bắt đầu học từ đâu?</p>
                    </div> 
                </div>
                <div className="ans">Đừng lo, Khóa luyện luôn tạo ra "Lộ trình học tập" để học từ đầu đến cuối, biết mình đang học đến đâu, cần học thêm những gì.</div>
            </div>
            <div className="box-reason">
                <div className="cir-reason">
                    <img src="https://onthisinhvien.com/images/icon/otsv/icon3-why-choose.svg" className="small"></img>
                </div>
                <div className="ques-ans">
                    <div>
                        <p className="ques">Em không biết hỏi bài ai?</p>
                    </div> 
                </div>
                <div className="ans">Đừng lo, Khóa luyện có một "Group chat riêng" để hỗ trợ em, giúp em trả lời các câu hỏi, giải đáp các thắc mắc về môn học nhé.</div>
            </div> 
        </div>
        <div className="feedback">
            <h2>PHẢN HỒI CỦA HỌC VIÊN KỲ TRƯỚC</h2>
            <div className="photo">
                <div className="list-photo">
                    <div className="name-photo">Trần Vân</div>
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"></img>
                </div>
                <div className="list-photo">
                    <div className="name-photo">Trần Vân</div>
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"></img>
                </div>
                <div className="list-photo">
                    <div className="name-photo">Trần Vân</div>
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"></img>
                </div>
                <div className="list-photo">
                    <div className="name-photo">Trần Vân</div>
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"></img>
                </div>
            </div>
            <div className="next-feedback">
                <div className="list-feedback">1</div>
                <div className="list-feedback">2</div>
                <div className="list-feedback">3</div>
                <div className="list-feedback">4</div>
            </div>
        </div>
       </div> 
    )
}

export default Reason;