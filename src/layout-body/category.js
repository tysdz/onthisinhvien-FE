// import React, { useState } from "react";
// import "./category.css";
// import { useDispatch } from 'react-redux';

// function Category() {
//     const dispatch = useDispatch();
//     const [modal, setModal] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal);
//     };

//     if(modal) {
//         document.body.classList.add('active-modal')
//     } else {
//         document.body.classList.remove('active-modal')
//     }
//     // 5678987656789
//     const addToCart = () => {
//         dispatch({ type: 'INCREMENT_CART' });
//       };
    

//     return(
//        <div className="category-course">
//         {modal && (
//             <div className="modal">
//             <div onClick={toggleModal} className="overlay"></div>
//             <div className="modal-content">
//                 <div className="name-modal">NEU EBOOK PLUS PHÁP LUẬT ĐẠI CƯƠNG</div>
//                 <div className="img-price">
//                     <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/317789103-1652535269607-phapluatdaicuong.jpg"></img>
//                     <div className="price">
//                         <span>40,000 VND</span>
//                         <p>Số bài học: 8</p>
//                         <p>Ngôn ngữ: Tiếng việt</p>
//                     </div>
//                 </div>
//                 <div className="modal-button">
//                     <div className="add-cart">
//                         <button id="add" onClick={addToCart}>THÊM VÀO GIỎ HÀNG</button>
//                     </div>
//                     <div className="buy-now">
//                         <button>MUA NGAY</button>
//                     </div>
//                 </div>
//                 <button className="close-modal" onClick={toggleModal}>X</button>
//             </div>
//             </div>
//         )}
//         <div className="header-category">
//             <div className="nameSchool">
//                 <img src="https://onthisinhvien.com/images/icon/otsv/icon-tag-school.svg">
//                 </img>
//                 <div>Đại học Kinh tế Quốc dân</div>
//             </div>
//             <div className="search-course">
//                 <button>HOT COMBO</button>
//                 <input placeholder="Tìm kiếm khóa học"></input>
//             </div>
//         </div>

//         <div className="combo-course">
//             <div className="block-category">
//                 <span className="name-cate">
//                 MÔN CHUYÊN NGÀNH (87 KHOÁ)
//                 </span>
//                 <div className="grid-cate">
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-course">
//                         <div className="box-img">
//                             <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
//                             <div class="overlay">
//                                 <div class="button-container">
//                                     <button class="button1" onClick={toggleModal}>Xem nhanh</button>
//                                     <button class="button2">Mua Ngay</button>
//                                 </div>
//                                 </div>
//                         </div>
//                         <div className="name-course">
//                         NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
//                         </div>
//                         <div className="description-course">
//                         Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
//                         </div>
//                         <div className="course-footer">
//                             <div className="number-member">
//                                 <span>548 đánh giá</span>
//                             </div>
//                             <div className="course-price">
//                                 <button>40,000 VND</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="category-showmore">
//                     <div className="cate-showmore">
//                     <button>Xem thêm</button>
//                 </div>
//                 </div>
//             </div>
//             {/* mujc 2 */}
            
//         </div>
//        </div> 
//     )
// }

// export default Category;

import React, { useState, useEffect } from "react";
import "./category.css";
import { useDispatch } from 'react-redux';
import coursesData from "./category.json"; // Update the path

function Category() {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [courses, setCourses] = useState([]);
    const [sections, setSections] = useState([]);
    const [addToCartSuccess, setAddToCartSuccess] = useState({});

    const toggleModal = (course) => {
      setSelectedCourse(course);
      setSections(course?.sections || []);
      setModal(!modal);
    };
  
    useEffect(() => {
      // Fetch data from the courses.json file
      setCourses(coursesData);
    }, []);
  
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  
    const addToCart = () => {
      dispatch({ type: 'INCREMENT_CART' });

    const newAddToCartSuccess = { ...addToCartSuccess };

    newAddToCartSuccess[selectedCourse.id] = true;
    setAddToCartSuccess(newAddToCartSuccess);
    };
  
    return (
      <div className="category-course">
        {modal && selectedCourse && (
          <div className="modal">
            <div onClick={() => toggleModal(null)} className="overlay"></div>
            <div className="modal-content">
              <div className="name-modal"><a>{selectedCourse.name}</a></div>
              <div className="scroll-modal">
                <div className="img-price">
                  <img src={selectedCourse.image} alt={`Image of ${selectedCourse.name}`} />
                  <div className="price">
                    <span>{selectedCourse.price}</span>
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

        
        <div className="header-category">
            <div className="nameSchool">
                <img src="https://onthisinhvien.com/images/icon/otsv/icon-tag-school.svg">
                </img>
                <div>Đại học Kinh tế Quốc dân</div>
            </div>
            <div className="search-course">
                <button>HOT COMBO</button>
                <input placeholder="Tìm kiếm khóa học"></input>
            </div>
        </div>

    <div className="combo-course">
      <div className="block-category">
        <span className="name-cate">
          MÔN ĐẠI CƯƠNG (87 KHOÁ)
        </span>
        <div className="grid-cate">
          {courses.map((course) => (
            <div className="box-course" key={course.id}>
              <div className="box-img">
                <img src={course.image} alt={`Image of ${course.name}`} />
                <div class="overlay">
                  <div class="button-container">
                    <button class="button1" onClick={() => toggleModal(course)}>Xem nhanh</button>
                    <button class="button2">Mua Ngay</button>
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
                  <button>{course.price}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="category-showmore">
          <div className="cate-showmore">
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>

    <div className="combo-course">
      <div className="block-category">
        <span className="name-cate">
          MÔN CHUYÊN NGÀNH (87 KHOÁ)
        </span>
        <div className="grid-cate">
          {courses.map((course) => (
            <div className="box-course" key={course.id}>
              <div className="box-img">
                <img src={course.image} alt={`Image of ${course.name}`} />
                <div class="overlay">
                  <div class="button-container">
                    <button class="button1" onClick={toggleModal}>Xem nhanh</button>
                    <button class="button2">Mua Ngay</button>
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
                  <button>{course.price}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="category-showmore">
          <div className="cate-showmore">
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>

    <div className="combo-course">
      <div className="block-category">
        <span className="name-cate">
          MÔN HỌC AEP (87 KHOÁ)
        </span>
        <div className="grid-cate">
          {courses.map((course) => (
            <div className="box-course" key={course.id}>
              <div className="box-img">
                <img src={course.image} alt={`Image of ${course.name}`} />
                <div class="overlay">
                  <div class="button-container">
                    <button class="button1" onClick={toggleModal}>Xem nhanh</button>
                    <button class="button2">Mua Ngay</button>
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
                  <button>{course.price}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="category-showmore">
          <div className="cate-showmore">
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
</div>
 );
}

export default Category;
