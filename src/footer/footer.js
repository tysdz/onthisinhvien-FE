import React, { useState } from "react";
import "./footer.css";

function Footer() {
    return(
       <div className="footer-panel">
        <div className="footer-1">
            <div className="infor-footer">
                <div class="infor">
                    <p>THÔNG TIN</p>
                    <a>Email: info@onthisinhvien.com</a>
                    <a>Hotline: 02473 010 929</a>
                    <a>Giờ làm việc: 8h00 - 11h30, 14h - 17h30</a>
                </div>
                <div class="infor">
                    <p>TIỆN ÍCH</p>
                    <a>Trang chủ</a>
                    <a>Khóa học</a>
                    <a>Tuyển dụng</a>
                    <a>Đề thi</a>
                    <a>Tin tức</a>
                </div>
                <div class="infor">
                    <p>CHÍNH SÁCH</p>
                    <a>Những câu hỏi thường gặp</a>
                    <a>Bộ quy tắc hành xử của mentor và học viên trên otsv</a>
                    <a>Chính sách chung</a>
                    <a>Chính sách bảo mật thông tin</a>
                    <a>Hướng dẫn kích hoạt khóa học</a>
                    <a>Chính sách hoàn trả học phí</a>
                    <a>Vi phạm chính sách</a>
                </div>
                <div class="infor">
                    <p>HỢP TÁC & LIÊN KẾT</p>
                    <a>Shopee UEH, UEL</a>
                    <a>Shopee NEU</a>
                    <a>Shopee VPP</a>
                    <a>Shopee TMU, HVTC</a>
                    <a>Shopee HUCE</a>
                </div>
                <div class="infor">
                    <p>TẢI APP</p>
                    <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fchplay-download.png&w=384&q=75"></img>
                    <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fapp-store-download.png&w=384&q=75"></img>
                    <a>Kết nối với chúng tôi</a>
                    <div className="connect-ft">
                        <img src="https://onthisinhvien.com/images/icon/otsv/youtube.svg"></img>
                        <img src="https://onthisinhvien.com/images/icon/otsv/fb.svg"></img>
                        <img src="https://onthisinhvien.com/images/icon/otsv/tiktok.svg"></img>
                        <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fins.png&w=1920&q=75"></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-2">
            @2013 - Công ty Cổ phần Đầu tư và Phát triển Koolsoft
            <br />Giấy chứng nhận đăng ký doanh nghiệp số: 0106353044, cấp bởi Sở kế hoạch và đầu tư TP. Hà Nội
        </div>
       </div>
    )
}

export default Footer;