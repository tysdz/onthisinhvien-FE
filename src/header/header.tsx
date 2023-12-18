import React, { useState, useEffect } from 'react';
import './header.scss';
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  //login and logout
  const [modalLogin, setModalLogin] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const toggleModalLogin = () =>{
    setModalLogin(!modalLogin)
  };
  if (modalLogin) {
    document.body.classList.add('active-modalLogin');
  } else {
    document.body.classList.remove('active-modalLogin');
  }

  const toggleModalLogout = () => {
    setModalLogout(!modalLogout)
  };
  if (modalLogout) {
    document.body.classList.add('active-modalLogout');
  } else {
    document.body.classList.remove('active-modalLogout');
  }

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  const cartCount = useSelector((state: { cartCount: number }) => state.cartCount);
  // const cartId = useSelector(state => state.cartId);

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
    <div>
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
                <a className="a2" href='/course'>KHÓA HỌC</a></button>
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
                {cartCount > 0 ? (
                  <div className="output-cart" id="output">{cartCount}</div>
                ):(
                  <div></div>
                )} 
                
              </div>
              <div className="ba-coc">
              <FaAlignJustify />
              </div>
            <button className="login" onClick={() => toggleModalLogin()}>Đăng nhập</button>
            <button className="register" onClick={() => toggleModalLogout()}>Đăng ký</button>
          </div>
        </div>
      { modalLogin &&(
        <div className="modalLogin">
        <div onClick={() => toggleModalLogin()} className="overlayLogin"></div>
        <div className="modalLogin-content">
          <div className="name-modal">
            <h3>Đăng Nhập
              <button className="close-modalLogin" onClick={() => toggleModalLogin()}>X</button>
            </h3>
            <div className='form-login'>
              <form>
                <div className="auth-name">
                  <div className="input-item">
                    <div>
                        <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Faccount.png&w=64&q=75" className="arnh"></img>
                      <input type="text" placeholder="Tài khoản đăng nhập" className='custom-input'></input>
                    </div>
                  </div>
                </div>
                <div className="auth-password">
                  <div className="input-item">
                    <div>
                      <span>
                        <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Fpassword.png&w=64&q=75"></img>
                      </span>
                      <input type="text" placeholder="Mật khẩu đăng nhập" className='custom-input'></input>
                    </div>
                  </div>
                </div>
                <div className="forget-pass">
                  <span>Quên mật khẩu</span>
                </div>
                <div className="other-login">
                  <button className='Login'>Đăng Nhập</button>
                  <div>
                    <span className="or">Hoặc</span>
                  </div>
                  <button className='Login-gg'>
                    <img src="https://onthisinhvien.com/images/icon/core/google-icon.svg"></img>
                    <span>Đăng nhập với Google</span>
                  </button>
                  <div>Không có tài khoản? <span onClick={() => { toggleModalLogin(); toggleModalLogout(); }}>Đăng kí ngay</span></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}
      { modalLogout &&(
        <div className="modalLogin">
        <div onClick={() => toggleModalLogout()} className="overlayLogin"></div>
        <div className="modalLogin-content">
          <div className="name-modal">
            <h3>Đăng Ký
              <button className="close-modalLogin" onClick={() => toggleModalLogout()}>X</button>
            </h3>
            <div className='form-login'>
              <form>
                <div className='all-auth'>
                  <div className="auth-name1">
                    <h4>1. Thông tin tài khoản</h4>
                    <div className="input-item">
                      <div>
                          <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Faccount.png&w=64&q=75" className="arnh"></img>
                        <input type="text" placeholder="Tài khoản đăng nhập" className='custom-input1'></input>
                      </div>
                    </div>
                    <div className="input-item">
                      <div>
                          <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Fpassword.png&w=64&q=75" className="arnh"></img>
                        <input type="text" placeholder="Mật khẩu đăng nhập" className='custom-input1'></input>
                      </div>
                    </div>
                    <div className="input-item">
                      <div>
                          <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Fpassword.png&w=64&q=75" className="arnh"></img>
                        <input type="text" placeholder="Nhập lại mật khẩu" className='custom-input1'></input>
                      </div>
                    </div>
                  </div>

                  <div className="auth-name2">
                    <h4>2. Thông tin cá nhân</h4>
                    <div className="input-item">
                      <div>
                          <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Faccount.png&w=64&q=75" className="arnh"></img>
                        <input type="text" placeholder="Họ và tên" className='custom-input1'></input>
                      </div>
                    </div>
                    <div className="input-item">
                      <div>
                          <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Fapp%2Faccount.png&w=64&q=75" className="arnh"></img>
                        <input type="text" placeholder="Email" className='custom-input1'></input>
                      </div>
                    </div>
                    <div className="input-item">
                      <div>
                          <img src="https://onthisinhvien.com/images/icon/phone-icon.svg" className="arnh"></img>
                        <input type="text" placeholder="Số điện thoại" className='custom-input1'></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="other-login">
                  <button className='Login'>Đăng ký</button>
                  <div>
                    <span className="or">Hoặc</span>
                  </div>
                  <button className='Login-gg'>
                    <img src="https://onthisinhvien.com/images/icon/core/google-icon.svg"></img>
                    <span>Đăng nhập với Google</span>
                  </button>
                  <div>Đã có tài khoản? <span onClick={() => { toggleModalLogout(); toggleModalLogin(); }}>Đăng nhập ngay</span></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  );
}

export default Header;