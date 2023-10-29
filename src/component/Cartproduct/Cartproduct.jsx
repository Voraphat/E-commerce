import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../function/CartContext";
import "./Cartproduct.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Cartproduct = () => {
  const { cartProducts, setCartProducts, totalCartPrice } =
    useContext(CartContext);

  const countDuplicateProducts = () => {
    const productMap = new Map();
  
    cartProducts.forEach((product) => {
      if (productMap.has(product.id)) {
        const existingProduct = productMap.get(product.id);
        existingProduct.quantity += 1;
        existingProduct.totalprice = existingProduct.quantity * existingProduct.price;
      } else {
        productMap.set(product.id, {
          id: product.id,
          name: product.name,
          img: product.img,
          quantity: product.quantity,
          price: product.price,
          totalprice: product.quantity * product.price,
        });
      }
    });
    return Array.from(productMap.values());
  };
  const duplicateProducts = countDuplicateProducts();


  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedCart);
  };

  return (
    <div className="cart-product">
      <div className="container">
        <h2>Your Cart</h2>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {duplicateProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <AiFillCloseCircle
                      onClick={() => handleRemoveFromCart(product.id)}
                      style={{ marginLeft: "1rem" }}
                      fontSize={30}
                    />
                  </td>
                  <td>
                    <img src={product.img} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>$ {product.totalprice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {totalCartPrice > 0 && (
          <div className="cart-totals">
            <table>
              <tbody>
                <tr>
                  <th>Cart totals</th>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>${totalCartPrice}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${totalCartPrice}</td>
                </tr>
              </tbody>
            </table>

            <Link to="/checkout">
              <button>PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};


export default Cartproduct;
