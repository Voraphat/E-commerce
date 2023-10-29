import { useContext, useRef } from "react";
import { CartContext } from "../../../function/CartContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../Navbar.css";



const CartModal = ({ showCartModal, handleCartModal }) => {
  
  const { cartProducts, setCartProducts,totalCartPrice } = useContext(CartContext);
  
  const modalRef = useRef(null);

  const productMap = new Map();

  cartProducts.forEach((product) => {
    if (productMap.has(product.id)) {
      const existingProduct = productMap.get(product.id);
      existingProduct.quantity += 1;
    } else {
      productMap.set(product.id, { ...product });
    }
  });


  const updatedCartProducts = Array.from(productMap.values());

  const handleModalClick = (event) => {
    if (event.target === modalRef.current) {
      handleCartModal();
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedCart);
  };

  return (
    <div>
      {showCartModal && (
        <div className="cart-modal" ref={modalRef} onClick={handleModalClick}>
          <div className="cart-content">
            <p className="text_shopping">
              Shopping Cart
              <span>
                <GrClose
                  onClick={handleCartModal}
                  style={{ color: "#000" }}
                  className="icon "
                />
              </span>
            </p>

            {cartProducts.length === 0 ? (
              <p className="text_noproduct">No products in the cart.</p>
            ) : (
              <>
                <ul>
                  {updatedCartProducts.map((product) => (
                    <li key={product.id}>
                      <img src={product.img} alt={product.name} />
                      <div className="text_product">
                        <p>{product.name}</p>
                        <p>
                          {product.quantity} x {product.price} $
                        </p>
                      </div>
                      <button
                        className="button_remove_product"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <AiFillCloseCircle />
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="subtotal">
              Subtotal: <span>{totalCartPrice} $</span>
            </p>
          </div>
          <div className="button_cart">
            <Link to="/cartproduct" onClick={handleCartModal}>
              <button>View Cart</button>
            </Link>
            <Link to="/checkout" onClick={handleCartModal}>
              <button>CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
