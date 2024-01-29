import React, { useState, useEffect } from "react";
import "./information.scss";
import { getInfor } from "../services/UserService";

function Information () {
    const [modalInfor, setModalInfor] = useState(false);
    const [changPass, setchangePass] = useState(false);
    const [userInfo, setUserInfo] = useState({
        nameUser: "",
        email: "",
        phoneNumber: "",
      });

    const toggleModalInfor = () =>{
        setModalInfor(!modalInfor)
      };
      if (modalInfor) {
        document.body.classList.add('active-modalLogin');
      } else {
        document.body.classList.remove('active-modalLogin');
      }

    const toggleChangePass = () => {
        setchangePass(!changPass)
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const response = await getInfor();
            if (response.success && response.infors.length > 0) {
              const userData = response.infors[0];
              setUserInfo({
                nameUser: userData.nameUser,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
              });
            }
          } catch (error) {
            console.error("Error fetching user information", error);
          }
        };
    
        fetchUserInfo();
      }, []);
    return (
        <div className="information_container">
            {modalInfor && (
                <div className="modalInf">
                <div onClick={() => toggleModalInfor()} className="overlayInfor"></div>
                <div className="modalInf-content">
                  <div className="scroll-modal">
                    <div className="img-infor">
                        <div className="main_infor1">
                            <div className="profile1">Photo</div>
                            <div className="name_infor1">{userInfo.nameUser}</div>
                            <div className="infor_button1">
                                <button className="show_infor1" onClick={() => toggleModalInfor()}>
                                    <img src="	https://onthisinhvien.com/images/icon/core/profile/edit.svg"></img>
                                    <span>Chỉnh sửa hình ảnh</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='form-inf'>
                        <h4>
                            <span>Thông tin cá nhân</span>
                            <button className="close-modalInfor" onClick={() => toggleModalInfor()}>X</button>
                        </h4>
                        <div className="all-grid-infor">
                            <div className="grid-infor">
                                <label>Tên đăng nhập</label>
                                <div>
                                    <div></div>
                                    <input type="text" placeholder="diepthieuduong202@gmail.com"></input>
                                </div>
                            </div>
                            <div className="grid-infor">
                                <label>Email</label>
                                <div>
                                    <div></div>
                                    <input type="text" placeholder={userInfo.email}></input>
                                </div>
                            </div>
                            <div className="grid-infor">
                                <label>Tên hiển thị</label>
                                <div>
                                    <div></div>
                                    <input type="text" placeholder={userInfo.nameUser}></input>
                                </div>
                            </div>
                            <div className="grid-infor">
                                <label>Số điện thoại</label>
                                <div>
                                    <div></div>
                                    <input type="text" placeholder={userInfo.phoneNumber}></input>
                                </div>
                            </div>
                            <div className="grid-infor">
                            </div>
                            <div className="grid-infor">
                                <div onClick={toggleChangePass}>Sửa mật khẩu</div>
                            </div>
                            { changPass && (
                                <div className="changepass">
                                    <div className="grid-infor">
                                        <label>Nhập mật khẩu cũ</label>
                                        <div>
                                            <div></div>
                                            <input type="text" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="grid-infor">
                                        <label>Nhập mật khẩu mới</label>
                                        <div>
                                            <div></div>
                                            <input type="text" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="grid-infor">
                                        <label>Nhập lại mật khẩu mới</label>
                                        <div>
                                            <div></div>
                                            <input type="text" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="grid-infor">
                                    </div>
                                </div>
                            )}
                            <div className="grid-infor">
                            </div>
                            <div className="grid-infor">
                                <button>Cập nhật</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="infor_layout">
                <div className="layout_left">
                    <div className="main_infor">
                        <div className="profile">NAME</div>
                        <div className="name_infor">Dương Diệp</div>
                        <div className="email_infor">diepthieuduong202@gmail.com</div>
                        <div className="infor_button">
                            <button className="show_infor" onClick={() => toggleModalInfor()}>
                                <img src="	https://onthisinhvien.com/images/icon/core/profile/edit.svg"></img>
                                <span> Sửa thông tin</span>
                            </button>
                            <button className="send_email">
                                <img src="	https://onthisinhvien.com/images/icon/core/profile/email.svg"></img>
                                <span> Phản hồi</span>
                            </button>
                        </div>
                    </div>
                    <div className="overview">Tổng quan</div>
                </div>
                <div className="layout_right">
                    <div className="near_activity">
                        <img src = "https://onthisinhvien.com/images/icon/core/profile/activities.svg"></img>
                        <span>Hoạt động gần đây</span>
                    </div>
                    <div className="online_time">
                        <img src = "https://onthisinhvien.com/images/icon/core/profile/time-online.svg"></img>
                        <span>Thời lượng online</span>
                    </div>
                    <div className="near_test">
                        <img src = "https://onthisinhvien.com/images/icon/core/profile/test-recent.svg"></img>
                        <span> Bài kiểm tra gần đây</span>
                    </div>
                    <div className="progress_course">
                        <img src = "https://onthisinhvien.com/images/icon/core/profile/course-progress.svg"></img>
                        <span> Tiến độ khoá học</span></div>
                </div>
            </div>
        </div>
    )
}

export default Information;