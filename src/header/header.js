import React, { useState } from 'react';
import './header.css';

function Header({ count }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="header-main">
        <div className="left-header">
          <a href="/">
            <img src="/logo-otsv.png" className="small-image" alt="Logo" />
          </a>
          
          <p>Ôn thi nhàn, Kết quả cao</p>
        </div>

        <div className="right-header">
          <a href="/">Trang chủ</a>
          <div
            className={`course dropdown-button ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropdown-label1">
              <a className="dropdown-label">Khóa học</a></button>
            <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <li><a href="#">ĐẠI HỌC KINH TẾ QUỐC DÂN</a></li>
              <li><a href="#">ĐẠI HỌC XÂY DỰNG</a></li>
              <li><a href="#">ĐẠI HỌC BÁCH KHOA</a></li>
              <li><a href="#">ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM</a></li>
              <li><a href="#">ĐẠI HỌC KINH TẾ - LUẬT HCM</a></li>
              <li><a href="#">ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM</a></li>
              <li><a href="#">ĐẠI HỌC THƯƠNG MẠI</a></li>
              <li><a href="#">ĐẠI HỌC TÔN ĐỨC THẮNG</a></li>
            </ul>
          </div>
          <a href="/kich-hoat">Kích hoạt</a>
          <div className="cart">
            <img src="https://onthisinhvien.com/images/icon/otsv/cart.svg"></img>
            <div class="output-cart" id="output">{ count }</div>
          </div>
          <button className="login">Đăng nhập</button>
          <button className="register">Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
