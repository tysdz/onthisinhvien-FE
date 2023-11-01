import React, { useState } from "react";
import "./category.css";

function Category() {
    return(
       <div className="category-course">
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
                MÔN CHUYÊN NGÀNH (87 KHOÁ)
                </span>
                <div className="grid-cate">
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cate-showmore">
                    <button>Xem thêm</button>
                </div>
            </div>
            {/* mujc 2 */}
            <div className="block-category">
                <span className="name-cate">
                MÔN HỌC AEP (40 KHOÁ))
                </span>
                <div className="grid-cate">
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cate-showmore">
                    <button>Xem thêm</button>
                </div>
            </div>
            <div className="block-category">
                <span className="name-cate">
                NGOẠI NGỮ - TIN HỌC - CĐR (0 KHOÁ)
                </span>
                <div className="grid-cate">
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cate-showmore">
                    <button>Xem thêm</button>
                </div>
            </div>
            <div className="block-category">
                <span className="name-cate">
                MÔN ĐẠI CƯƠNG (68 KHOÁ)
                </span>
                <div className="grid-cate">
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-course">
                        <div className="box-img">
                            <img src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75"></img>
                            <div class="overlay">
                                <div class="button-container">
                                    <button class="button1">Xem nhanh</button>
                                    <button class="button2">Mua Ngay</button>
                                </div>
                                </div>
                        </div>
                        <div className="name-course">
                        NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN
                        </div>
                        <div className="description-course">
                        Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.
                        </div>
                        <div className="course-footer">
                            <div className="number-member">
                                <span>548 đánh giá</span>
                            </div>
                            <div className="course-price">
                                <button>40,000 VND</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cate-showmore">
                    <button>Xem thêm</button>
                </div>
            </div>
        </div>
       </div> 
    )
}

export default Category;