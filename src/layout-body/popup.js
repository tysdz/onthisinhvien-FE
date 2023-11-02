import React from 'react';

const LoginPopup = ({ onClose }) => {
  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <h2>Đăng nhập</h2>
        {/* Form đăng nhập ở đây */}
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default LoginPopup;
