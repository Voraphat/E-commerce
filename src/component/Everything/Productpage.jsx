import "./Productpage.css";
import { useState } from "react";
import Itemevery from "./Cardevery/Itemcard/Itemevery";
import Itemleft from "./Cardevery/Itemcard/Itemleft";
import { Link } from "react-router-dom";

const Productpage = ({ products, pageTitle, detailpage }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState(products);

  const [currentPage, setCurrentPage] = useState(1); 

  const itemsPerPage = 9; 


  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const results = products.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.price.toString().includes(value)
    );

    setSearchResults(results);
    setCurrentPage(1); 
  };

 
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
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
                No products were found matching your selection.
              </q>
            ) : (

              displayedItems.map((product) => (

                <Link to={`/productdetail/${product.id}`} key={product.id}>

                  <Itemevery
                    img={product.img}
                    Head={product.name}
                    detail={product.type}
                    para={product.price.toFixed(2)}
                  />
                  
                </Link>

              ))
            )}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                className={currentPage === index}
                onClick={() => setCurrentPage(index + 1)}
              >
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
