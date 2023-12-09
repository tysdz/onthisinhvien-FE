import React, { useState } from "react";
import "./activity.scss";

function Activity() {
    return(
       <div className="top-activity">
        <h2>ÔN THI SINH VIÊN - THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN</h2>
        <a>Đây là những sự kiện, hoạt động ghi dấu ấn của OTSV trong năm</a>
        <div className="bottom-activity">
            <div className="box-ac">
                <div className="circle-ac">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F136923477-1638332088547-neuyouthfestival2021.jpg&w=1920&q=75" ></img>
                    <div className="title-ac">
                    Ôn thi sinh viên HL - NEU YOUTH FESTIVAL 2021
                    </div>
                    <div className="time">
                    Ngày: 01/12/2021
                    </div>
                </div>
            </div>
            <div className="box-ac">
                <div className="circle-ac">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F136923477-1638332088547-neuyouthfestival2021.jpg&w=1920&q=75" ></img>
                    <div className="title-ac">
                    NHỮNG ĐIỀU CẦN PHẢI BIẾT TRƯỚC KHI VÀO TDTU CỦA CÁC TÂN SINH VIÊN
                    </div>
                    <div className="time">
                    Ngày: 01/12/2021
                    </div>
                </div>
            </div> 
            <div className="box-ac">
                <div className="circle-ac">
                    <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F136923477-1638332088547-neuyouthfestival2021.jpg&w=1920&q=75" ></img>
                    <div className="title-ac">
                    Học bổng HL dành cho sinh viên giỏi các trường đại học                    </div>
                    <div className="time">
                    Ngày: 01/12/2021
                    </div>
                </div>
            </div>   
        </div>
        <div className="showMore">
            <button>Xem thêm</button>
        </div>
       </div> 
    )
}

export default Activity;