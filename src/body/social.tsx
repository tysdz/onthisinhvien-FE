import React, { useState, useEffect } from "react";
import "./social.scss";

function Social() {
    const [activeDiv, setActiveDiv] = useState("tam-nhin");
  
    const toggleDiv = (buttonId: string) => {
      setActiveDiv(buttonId);
    };
  
    useEffect(() => {
      const divs = document.querySelectorAll<HTMLElement>('[id^="div-"]');
      divs.forEach((div) => {
        if (div.id === `div-${activeDiv}`) {
          div.style.display = 'block';
        } else {
          div.style.display = 'none';
        }
      });
    }, [activeDiv]);

    return(
        <div className="wrapper">
            <div className="wrapper-social">
                <div className="w-title">
                    <div className="title">
                        OTSV TRÊN CÁC <span> NỀN TẢNG </span>MẠNG XÃ HỘI
                    </div>
                    <div className="description">
                        Nơi chia sẻ kiến thức, kỹ năng bổ ích dành cho sinh viên
                    </div>
                </div>
                <div className="youtube-tiktok">
                    <div className="youtube">
                        <div className="item">
                            <div className="image">
                                <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fyoutube.png&w=1920&q=75"></img>
                            </div>
                            <div className="number">2.772.063 
                            </div>
                            <a href="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn">
                                <div className="Sub">
                                    <div className="text">Subcribe</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="youtube">
                        <div className="item">
                            <div className="image">
                                <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Ftiktok.png&w=1920&q=75"></img>
                            </div>
                            <div className="number">2.772.063 
                            </div>
                            <a href="https://www.tiktok.com/@onthisinhvien">
                                <div className="Sub">
                                    <div className="text">Subcribe</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="vision">
                    <h2>HỆ THỐNG ÔN THI SINH VIÊN</h2>
                    <div className="box-button">
                    <button className="button-vision" onClick={() => toggleDiv('tam-nhin')}>
                        TẦM NHÌN
                    </button>
                    <button className="button-vision" onClick={() => toggleDiv('su-menh')}>
                         SỨ MỆNH
                    </button>
                    < button className="button-vision" onClick={() => toggleDiv('gia-tri-cot-loi')}>
                            GIÁ TRỊ CỐT LÕI
                    </button>
                    <button className="button-vision" onClick={() => toggleDiv('phat-trien')}>
                            CHẶNG ĐƯỜNG PHÁT TRIỂN
                        </button>
                        <button className="button-vision" onClick={() => toggleDiv('van-hoa')}>
                            VĂN HÓA
                        </button>

                        <div id="div-tam-nhin" className="div-button">
                            <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Ftam-nhin.png&w=1920&q=75"></img>
                            <a>Bằng nỗ lực sáng tạo nội dung, công nghệ và đổi mới trong quản trị, ÔN THI SINH VIÊN mong muốn trở thành công ty có phần mềm luyện thi được sinh viên sử dụng phổ biến nhất trong nước.</a>
                        </div>
                        <div id="div-su-menh" className="div-button">
                        <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fsu-menh.png&w=1920&q=75"></img>
                            <a>Sứ mệnh của OTSV là phát triển phần mềm luyện thi thay đổi cách học và ôn thi thông qua công cụ với nội dung bám sát chương trình học và tính năng thông minh tăng hiệu quả học tập.</a>
                        </div>
                        <div id="div-gia-tri-cot-loi" className="div-button">
                            <div className="button-item">
                                <img src="https://onthisinhvien.com/images/icon/otsv/tam-huyet.svg"></img>
                                <div className="item-des">
                                    <div className="item-main">Tâm huyết</div>
                                    <div>Đội ngũ Ôn thi sinh viên từ những anh/chị biên soạn nội dung, đến anh/chị admin tin tức và admin học tập luôn <span className="item-main">NHIỆT TÌNH, TÂM HUYẾT</span> phục vụ vì sinh viên, là người bạn đồng hành trong học tập.</div>
                                </div>
                            </div>
                            <div className="button-item">
                                <img src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"></img>
                                <div className="item-des">
                                    <div className="item-main">Chất Lượng</div>
                                    <div>Các khóa luyện luôn bám sát chương trình học và đề thi theo từng trường đại học. Sinh viên có thể làm quen với các dạng bài tập, câu hỏi lý thuyết để tăng tốc độ làm đề. Bằng ứng dụng <span className="item-main">CNTT</span> sẽ giúp sinh viên học tập mọi lúc mọi nơi, trên nhiều thiết bị. Tự động xác định những phần kiến thức yếu của học viên để cải thiện.</div>
                                </div>
                            </div>
                            <div className="button-item">
                                <img src="https://onthisinhvien.com/images/icon/otsv/con-nguoi.svg"></img>
                                <div className="item-des">
                                    <div className="item-main">Con người</div>
                                    <div>OTSV team gồm các anh/chị không chỉ <span className="item-main">GIỎI CHUYÊN MÔN, KỸ NĂNG VĂN PHÒNG</span> mà còn năng động và sáng tạo. Không ngừng học hỏi và vượt qua mọi giới hạn. Sẵn sàng tiếp nhận tích cực những đóng góp từ phía học viên và cải thiện nội dung hàng kỳ. Giữ trong mình những chuẩn mực đạo đức, văn hóa và tác phong làm việc chuyên nghiệp</div>
                                </div>
                            </div>
                        </div>
                        <div id="div-phat-trien" className="div-button">
                            <div className="button-item">
                                    <img src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"></img>
                                    <div className="item-des">
                                        <div>Năm 2014, Mở các lớp ôn luyện trực tiếp đầu tiên tại NEU</div>
                                    </div>
                                </div>
                                <div className="button-item">
                                    <img src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"></img>
                                    <div className="item-des">
                                        <div>Năm 2017, Phát triển, mở rộng thị trường theo hướng phần mềm luyện thi như ngày nay, tiền thân là hocthongminh.com</div>
                                    </div>
                                </div>
                                <div className="button-item">
                                    <img src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"></img>
                                    <div className="item-des">
                                        <div>Năm 2019-2020, Mở rộng các chi nhánh (NEU, HUCE, UEH, UEL, TMU, HVTC,..) và lấy tên gọi chính thức là Ôn thi sinh viên vào ngày: 01/08/2019</div>
                                    </div>
                                </div>
                                <div className="button-item">
                                    <img src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"></img>
                                    <div className="item-des">
                                        <div>Năm 2021, Tận dụng cơ hội phát triển thương hiệu và vươn lên trở thành chuyên nghiệp</div>
                                    </div>
                                </div>
                                </div>
                                <div id="div-van-hoa" className="div-button">
                                <div className="vid-container1">
                                    <div className="panel-ifame1">
                                        <iframe
                                        width={'60%'}
                                        height={491}
                                        src="https://www.youtube.com/embed/NNYzsy1HFZY"
                                        />
                                    </div>
                                    </div>
                                </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Social;