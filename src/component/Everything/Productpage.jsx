/* eslint-disable react/jsx-key */
import "./Productpage.css";
import { useState } from "react";
import Itemevery from "./Cardevery/Itemcard/Itemevery";
import Itemleft from "./Cardevery/Itemcard/Itemleft";
import { Link } from "react-router-dom";

const Productpage = ({ products, pageTitle, detailpage }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState(products);

  const [currentPage, setCurrentPage] = useState(1); // แสดงเป็นหน้าแรก

  const itemsPerPage = 9; // มี9ชิ้นต่อหน้า

  // เมื่อค้นหาให้เอาค่าไปเก็บใน value และไปเก็บใน setSearch

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // กรองออบเจกต์ที่มีชื่อหรือราคาตรงกับคำค้นหา

    const results = products.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.price.toString().includes(value)
    );

    setSearchResults(results);
    setCurrentPage(1); // เมื่อค้นหาให้ใช้เป็นหน้าแรก
  };

  // จำนวน searchResults หาร itemsPerPage เพื่อคิดจำนวนหน้า
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  // คำนวณ index ชิ้นแรกของรายการที่จะเริ่ม
  const startIndex = (currentPage - 1) * itemsPerPage;
  // คำนวณ index ชิ้นสุดท้ายที่จะแสดงในหน้าปัจจุบัน
  const endIndex = startIndex + itemsPerPage;
  // ใช้ตัดรายการ index ให้โชว์เฉพาะ ที่เราต้องการ
  const displayedItems = searchResults.slice(startIndex, endIndex);

  return (
    <div className="productpage">
      <div className="container">
        <div className="left-productpage">
          <Itemleft searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>

        <div className="right-productpage">
          <h1>{pageTitle}</h1>
          <p>{detailpage}</p>

          <div className="card-productpage">
            {searchResults.length === 0 ? (
              <q className="alert">
                {" "}
                No products were found matching your selection.{" "}
              </q>
            ) : (

              displayedItems.map((product) => (

                <Link to={`/productdetail/${product.id}`} key={product.id}>

                  <Itemevery
                    img={product.img}
                    Head={product.name}
                    detail={product.type}
                    para={product.price}
                  />
                  
                </Link>

              ))
            )}
          </div>

          <div className="pagination">
            {/* สร้าง array ใหม่ โดยเอาจำนวน totalpages มา map */}
            {Array.from({ length: totalPages }).map((_, index) => (
              //  หน้าปัจจุบัน = index +1 เพื่อแสดงจำนวนหน้า
              <button
                className={currentPage === index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {/* จำนวนหน้า +1 */}
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
