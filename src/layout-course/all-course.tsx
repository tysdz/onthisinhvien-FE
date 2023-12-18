import React, { useState, useEffect } from "react";
import "./all-course.scss";
import schoolsData from "./list-school.json"; 
import coursesData from "./list-category.json"; 
import store from "../redux/add";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";


interface Course {
    id: number;
    name: string;
    image: string;
    description: string;
    reviews: number;
    price: string;
    numLessons: number;
    language: string;
    h1des?: string;
    sections: string[];
  }

function Allcourse() {
    const [schools, setSchools] = useState(schoolsData);
    const [boxcate, setBoxcate] = useState(true);
    const [modal, setModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [courses, setCourses] = useState<Course[]>([]);
    const [sections, setSections] = useState<string[]>([]);
    const [addToCartSuccess, setAddToCartSuccess] = useState<{ [key: number]: boolean }>({});
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 12;
    const totalPages = Math.ceil(courses.length / coursesPerPage); 
    const pageNumbers = Array.from({ length: totalPages }, (_,index) => index + 1);

    const toggleModal = (course: Course | null) => {
    setSelectedCourse(course);
    setSections(course?.sections || []);
    setModal(!modal);
    };
    useEffect(() => {
        // Fetch data from the courses.json file
        setCourses(coursesData as Course[]);
      }, []);
    
      if (modal) {
        document.body.classList.add('active-modal');
      } else {
        document.body.classList.remove('active-modal');
      }

      useEffect(() => {
        if (selectedCourse && store.getState().cartId.includes(selectedCourse.id)) {
          const newAddToCartSuccess = { ...addToCartSuccess };
          newAddToCartSuccess[selectedCourse.id] = true;
          setAddToCartSuccess(newAddToCartSuccess);
        }
      }, [store.getState().cartId, selectedCourse, addToCartSuccess]);

      const addToCart = () => {
        dispatch({ type: 'INCREMENT_CART', payload: { productId: selectedCourse!.id } });
        const newAddToCartSuccess = { ...addToCartSuccess };
        newAddToCartSuccess[selectedCourse!.id] = true;
        setAddToCartSuccess(newAddToCartSuccess);
    
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      };

    const toggleBoxcate = () => {
        setBoxcate(!boxcate);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return(
        <div className="all">
            {showAlert ?  (
        <div className="alert">
          Thêm vào giỏ hàng thành công!
        </div>
      ):(
        <div></div>
      )}
        {modal && selectedCourse && (
          <div className="modal">
            <div onClick={() => toggleModal(null)} className="overlay"></div>
            <div className="modal-content">
              <div className="name-modal"><a>{selectedCourse.name}</a></div>
              <div className="scroll-modal">
                <div className="img-price">
                  <img src={selectedCourse.image} alt={`Image of ${selectedCourse.name}`} />
                  <div className="price">
                    <div >
                      <FontAwesomeIcon icon={faTag} className="tag"/>
                      <span>{selectedCourse.price} VND</span>
                    </div>
                    <p>Số bài học: {selectedCourse.numLessons}</p>
                    <p>Ngôn ngữ: {selectedCourse.language}</p>
                  </div>
                </div>
                <div className="more-des">
                  <h1>{selectedCourse.h1des}</h1>
                  <ul>
                    {sections.map((section, index) => (
                      <li key={index}>{section}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="modal-button">
              {addToCartSuccess[selectedCourse.id] ?(
                  <div className="add-cart" >
                    <a href="/cart" ><button>XEM GIỎ HÀNG</button></a>
                  </div>
              ) : (
                <div className="add-cart">
                  <button id="add" onClick={addToCart}>THÊM VÀO GIỎ HÀNG</button>
                </div>
              )}
                <div className="buy-now">
                  <button>MUA NGAY</button>
                </div>
              </div>
              <button className="close-modal" onClick={() => toggleModal(null)}>X</button>
            </div>
          </div>
        )}
            <div className="all-left">
                <div className="head-cate" onClick={toggleBoxcate}>Danh mục khóa học</div>
                {boxcate && (
                    <div className="box-cate">
                        <button>TẤT CẢ KHÓA HỌC</button>
                        {schools.map((school) => (
                        <div className="item-cate">{school.description}</div>
                        ))}
                    </div>
                )}
            </div>
            <div className="all-right">
            <div className="grid-cate">
                {courses.slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage).map((course) => (
                    <div className="box-course" key={course.id}>
                    <div className="box-img">
                        <img src={course.image} alt={`Image of ${course.name}`} />
                        <div className="overlay">
                        <div className="button-container">
                            <button className="button1" onClick={() => toggleModal(course)}>Xem nhanh</button>
                            <button className="button2">Mua Ngay</button>
                        </div>
                        </div>
                    </div>
                    <div className="name-course">
                        {course.name}
                    </div>
                    <div className="description-course">
                        {course.description}
                    </div>
                    <div className="course-footer">
                        <div className="number-member">
                        <span>{course.reviews} đánh giá</span>
                        </div>
                        <div className="course-price">
                        <button>{course.price} VND</button>
                        </div>
                    </div>
                    </div>
                ))}
                {totalPages > 1 ? (
                    <div className="pagination-container">
                    {pageNumbers.map((pageNumber) => (
                        <button key={pageNumber} onClick={() => {setCurrentPage(pageNumber);scrollToTop();}} className={currentPage === pageNumber ? 'active' : ''}>
                        {pageNumber}
                      </button>
                    ))}
                </div>
                ):(
                    <div></div>
                )}
            </div>
            </div>
        </div>
    )
}

export default Allcourse;