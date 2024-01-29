import React, { useState, useEffect } from "react";
import './CartPage.scss';
import { useSelector,useDispatch } from 'react-redux';
import coursesData from "../layout-body/category.json"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {removeCart} from "../redux/add"


interface Course {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string; 
  }
  
  function CartPage() {
    const dispatch = useDispatch();
    const [coursesInCart, setCoursesInCart] = useState<Course[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
    const cartId = useSelector((state: any) => state.cartId); 
    const [showAlert, setShowAlert] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
  
    useEffect(() => {
      const filteredCourses = coursesData.filter((course: Course) => cartId.includes(course.id));
      setCoursesInCart(filteredCourses);
    }, [cartId]);
  
    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeCart({ productId: productId }));
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    };
  
    const chooseTheCourse = (productId: number) => {
      setSelectedCourses((prevSelectedCourses) => {
        if (prevSelectedCourses.includes(productId)) {
          return prevSelectedCourses.filter((id) => id !== productId);
        } else {
          return [...prevSelectedCourses, productId];
        }
      });
    };
  
    const temporaryAmount = coursesInCart
      .filter((course) => selectedCourses.includes(course.id))
      .reduce((sum, course) => sum + parseInt(course.price, 10), 0);
  
    const totalAmount = temporaryAmount;


    const handleSelectAll = () => {
        setSelectAll((prevSelectAll) => !prevSelectAll);
        setSelectedCourses((prevSelectedCourses) =>
          selectAll ? [] : coursesInCart.map((course) => course.id)
        );
      };

    return(
        <div>
             {showAlert ?  (
                <div className="alert">
                Xóa sản phẩm thành công!
                </div>
            ):(
                <div></div>
            )}
            {cartId.length <= 0 ? (
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
                            <FontAwesomeIcon className="e-cart-icon1" icon={faCartPlus} />
                        </div>
                        <div className="e-cart-item">Bạn chưa có khóa học nào <br /> trong giỏ hàng</div>
                        <div className="e-cart" >
                            <a href='/course'>Tiếp tục mua sắm</a>
                            </div>
                    </div>
                </div>
            </div>
            ) : (
            <div className="item-in-cart">
                <div className="all-course-cart">
                    {coursesInCart.map((course) => (
                            <div key={course.id} className="course-cart">
                                <div className="check-box">
                                    <input type="checkbox" onChange={() => chooseTheCourse(course.id)} checked={selectedCourses.includes(course.id)}/>
                                </div>
                                <div className="item-id">
                                    <div className="id-img">
                                        <img src={course.image}></img>
                                    </div>
                                    <div className="id-des-price">
                                        <div className="id-des">
                                            <div className="id-description">
                                                <div className="title-id">{course.name}</div>
                                                <div className="short-des">{course.description}</div>
                                            </div>
                                            <div className="date">Kết thúc :</div>
                                        </div>
                                        <div className="id-price">
                                            <div className="real-price">{course.price} VND</div>
                                            <div className="remove">
                                                <button onClick={() => handleRemoveFromCart(course.id)}>X</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                ))}
                </div>
                
                <div className="payment">
                    <div className="pay-course">
                        <label>Thông tin đơn hàng</label>
                        <div className="total-payment1">
                            <span>Tạm tính</span>
                            <div>{temporaryAmount} VND</div>
                        </div>
                        <div className="total-payment2">
                            <span><b>Tổng tiền</b></span>
                            <div>{totalAmount} VND</div>
                        </div>
                        <div>
                            <button>THANH TOÁN</button>
                        </div>
                    </div>
                    <div className="select-all" >
                        {/* {selectAll ? (
                            <button onClick={() => handleSelectAll()}>Bỏ chọn tất cả</button>
                        ):(
                            <button onClick={() => handleSelectAll()}>Chọn tất cả</button>
                        )} */}
                        <button onClick={() => handleSelectAll()}>
                            {selectAll ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                        </button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default CartPage;


