import React, { Fragment } from "react";
import './CartPage.css'

function CartPage(){
    return(
        <div>
            <div className="link-cart">
                <div className="link-ca">
                    <a href="/">Trang chủ</a>
                    <a>›</a>
                    <a href="/cart">Giỏ hàng</a>
                </div>
            </div>

            <div className="item-cart">
                <div className="item-cart-des">
                    <div className="e-cart-icon">
                        <img src="https://onthisinhvien.com/images/icon/otsv/cart.svg"></img>
                    </div>
                    <div className="e-cart-item">Bạn chưa có khóa học nào <br /> trong giỏ hàng</div>
                    <div className="e-cart">Tiếp tục mua sắm</div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;