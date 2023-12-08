// import React from "react";
// import "./list-school.css";

// function ListSchool() {
//     const handleSchoolClick = () => {
//         window.location.href = "/NEU"; 
//       };

//     return(
//        <div className="catogery">
//         <div className="catogery1">
//             <div className="top">
//                 <p className="top1">DANH SÁCH TRƯỜNG HỌC</p>
//                 <p className="top2">
//                     <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học</b>, giúp ôn thi hiệu quả
//                 </p>
//             </div>
//             <div className="search">
//                 <input type="text" placeholder="Tìm kiếm tên trường..."></input>
//             </div>
//             <div className="list">
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>

//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/258008389-1646280981033-daihocxaydung.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/30498790-1590834420684-logo(1).jpg"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/335050581-1646297997776-daihockinhteluathcm.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>

//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="box-school">
//                 <div className="school" onClick={handleSchoolClick}>
//                     <div className="name-school">
//                         <img src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/169791473-1646299420168-daihockinhtequocdan.png"></img>
//                         <div className="name">
//                             <p className="neu">NEU</p>
//                             <p>ĐẠI HỌC KINH TẾ QUỐC DÂN</p>
//                         </div>
//                     </div>
//                     <div className="information">
//                         <div className="course">Khoá học</div>
//                         <button className="show-more">Xem thêm</button>
//                     </div>
//                     </div>
//                 </div>
                
//             </div>

//         </div>

//        </div>
//     )
// }

// export default ListSchool;




import React, { useState } from "react";
import "./list-school.scss";
import schoolsData from "./list-school.json"; // Update the path

function ListSchool() {
  const [schools, setSchools] = useState(schoolsData);

  const handleSchoolClick = (schoolId) => {
    window.location.href = `/${schoolId}`;
  };

  return (
    <div className="catogery">
      <div className="catogery1">
      <div className="top">
          <p className="top1">DANH SÁCH TRƯỜNG HỌC</p>
          <p className="top2">
            <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học</b>, giúp ôn thi hiệu quả
          </p>
        </div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm tên trường..."></input>
        </div>
        <div className="list">
          {schools.map((school) => (
            <div className="box-school" key={school.id}>
              <div className="school" onClick={() => handleSchoolClick(school.id)}>
                <div className="name-school">
                  <img src={school.image} alt={`Logo of ${school.name}`} />
                  <div className="name">
                    <p className="neu">{school.name}</p>
                    <p className="neu-dis">{school.description}</p>
                  </div>
                </div>
                <div className="information">
                  <div className="course">Khoá học</div>
                  <button className="show-more">Xem thêm</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListSchool;

