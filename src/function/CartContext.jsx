import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({});
export const CartContextProvider = ({ children }) => {

  
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    const total = cartProducts.reduce((acc, item) => {
      return acc + item.quantity * item.price; // ราคาต่อชิ้น
    }, 0);

    setCartProducts([...cartProducts, product]);

    const newTotal = total + product.quantity * product.price;
    setTotalCartPrice(newTotal);
  };

  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const contextValue = useMemo(() => {
    return { cartProducts, addToCart, setCartProducts, totalCartPrice };
  }, [cartProducts, setTotalCartPrice]);

  
  return (
    <CartContext.Provider value={contextValue}>

      {children}

    </CartContext.Provider>
  );
};

