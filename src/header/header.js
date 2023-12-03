import React, { useState, useEffect } from 'react';
import './header.css';
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  const cartCount = useSelector(state => state.cartCount);

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra vị trí cuộn và cập nhật trạng thái
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Thêm sự kiện cuộn
    window.addEventListener('scroll', handleScroll);

    // Làm sạch sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-main">
        <div className="left-header">
          <a href="/">
            <img src="/logo-otsv.png" className="small-image" alt="Logo" />
          </a>
          
          <p>Ôn thi nhàn, Kết quả cao</p>
        </div>

        <div className="right-header">
          <button className="dropdown-label1">
            <a className="a1" href="/">TRANG CHỦ</a></button>
            <div
              className={`course dropdown-button ${isDropdownOpen ? 'open' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
            <button className="dropdown-label1">
              <a className="a2">KHÓA HỌC</a></button>
              <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <li><a href="NEU">ĐẠI HỌC KINH TẾ QUỐC DÂN</a></li>
                <li><a href="#">ĐẠI HỌC XÂY DỰNG</a></li>
                <li><a href="#">ĐẠI HỌC BÁCH KHOA</a></li>
                <li><a href="#">ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM</a></li>
                <li><a href="#">ĐẠI HỌC KINH TẾ - LUẬT HCM</a></li>
                <li><a href="#">ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM</a></li>
                <li><a href="#">ĐẠI HỌC THƯƠNG MẠI</a></li>
                <li><a href="#">ĐẠI HỌC TÔN ĐỨC THẮNG</a></li>
                <li><a href="#">ĐẠI HỌC XÂY DỰNG</a></li>
                <li><a href="#">ĐẠI HỌC BÁCH KHOA</a></li>
                <li><a href="#">ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM</a></li>
                <li><a href="#">ĐẠI HỌC KINH TẾ - LUẬT HCM</a></li>
                <li><a href="#">ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM</a></li>
                <li><a href="#">ĐẠI HỌC THƯƠNG MẠI</a></li>
                <li><a href="#">ĐẠI HỌC TÔN ĐỨC THẮNG</a></li>
              </ul>
            </div>
            <button className="dropdown-label1">
              <a className="a3" href="/kich-hoat">KÍCH HOẠT</a></button>
            <div className="cart" >
              <a href="/cart">
                <img src="https://onthisinhvien.com/images/icon/otsv/cart.svg"></img>
              </a> 
              <div class="output-cart" id="output">{cartCount}</div>
            </div>
            <div className="ba-coc">
            <FaAlignJustify />
            </div>
          <button className="login">Đăng nhập</button>
          <button className="register">Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}

export default Header;