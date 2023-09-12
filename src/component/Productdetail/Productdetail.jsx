import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductsData } from "../../Data/Product";
import { CartContext } from "../../function/CartContext";
import { AiFillCheckCircle } from "react-icons/ai";
import Reviews from "./Reviews/Reviews";
import Description from "./Description/Description";
import "./Productdetail.css";
import RelatedProducts from "./Related/Related";


const ProductDetailpage = () => {

  const { id } = useParams();

  // const [cart, setCart] = useState([]);
  // const { cartProducts, setCartProducts } = useContext(CartContext);
  const [message, setMessage] = useState("");

  const [showDescription, setShowDescription] = useState(true);

  const [showAlert, setShowAlert] = useState(false);
  
  const { addToCart } = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart(product);
    setMessage(`${product.name} has been added to your cart.`);
    setShowAlert(true);
  };


  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => {
        clearTimeout(timeout); //เพื่อไม่ให้มันทำซ้ำ
      };
    }
  }, [showAlert]);



  const product = findProductById(id);

  return (

    <div className="product-detail">
      <div className="container">
        {showAlert && (
          <p className="text-alert">
            <AiFillCheckCircle className="icon-cert" />
            {message}
          </p>
        )}

        <div className="content_productdetail">
          <div className="card_img_detail">
            <div className="img-productdetail">
              <img src={product.img} alt={product.name} />
            </div>
          </div>
          
          <div className="text-productdetail">
            <h2>{product.name}</h2>
            <p>{product.price}.00 $</p>
            <p>{product.detail}</p>
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>
        </div>

        <div className="description_Reviews">
          <ul className="description-menu">
            <li>
              <a onClick={() => setShowDescription(true)}>Description</a>
            </li>
            <li>
              <a onClick={() => setShowDescription(false)}>Reviews</a>
            </li>
          </ul>

          {showDescription ? (
            <Description product={product} />
          ) : (
            <Reviews product={product} />
          )}
        </div>
        
        <RelatedProducts
          productDetailId={id}
          allProducts={Object.values(ProductsData).flat()}
        />
      </div>
    </div>
  );
};

export default ProductDetailpage;

// หาสินค้าจากไอดี
function findProductById(id) {

  for (const category in ProductsData) {
    
    const products = ProductsData[category];
    const product = products.find((item) => item.id === id);

    if (product) {
      return product;
    }
  }
  return null;
}

// console.log(addtoCart);
// const addToCart = () => {
//   const newItem = { ...product };
//   setCart([...cart, newItem]);
//   setMessage(`${product.name} has been added to your cart.`);
// };
// console.log(cart);
