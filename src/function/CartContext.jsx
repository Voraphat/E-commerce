import { createContext, useState, useMemo } from "react";

// ver 4
// export const CartContext = createContext({});

// export const CartContextProvider = ({ children }) => {
//   const [cartProducts, setCartProducts] = useState([]);

//   const addToCart = (product) => {
//     setCartProducts((prevCartProducts) => {
//       const existingProductIndex = prevCartProducts.findIndex(
//         (item) => item.id === product.id
//       );

//       if (existingProductIndex !== -1) {
//         prevCartProducts[existingProductIndex].quantity += product.quantity;
//         return [...prevCartProducts];
//       } else {

//         return [...prevCartProducts, product];
//       }
//     });
//   };

//   const totalCartPrice = useMemo(() => {
//     return cartProducts.reduce((total, product) => {
//       return total + product.quantity * product.price;
//     }, 0);
//   }, [cartProducts]);

//   const contextValue = useMemo(() => {
//     return { cartProducts, addToCart, setCartProducts, totalCartPrice };
//   }, [cartProducts, totalCartPrice]);

//   return (
//     <CartContext.Provider value={contextValue}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// ver1

// export const CartContext = createContext({});

// export function CartContextProvider({ children }) {

//     const [cartProducts, setCartProducts] = useState([]);
//     console.log(cartProducts)

//     return (
//         <CartContext.Provider value={{ cartProducts, setCartProducts }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// CartContext.j

// ver2 is good
export const CartContext = createContext({});
export const CartContextProvider = ({ children }) => {

  
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    // คำนวณราคารวมสินค้าทั้งหมดที่มีอยู่ในตะกร้า
    const total = cartProducts.reduce((acc, item) => {
      return acc + item.quantity * item.price; // ราคาต่อชิ้น
    }, 0);

    setCartProducts([...cartProducts, product]);

    // ราคาทั้งหมด
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

// ver3
// export const CartContextProvider = ({ children }) => {

//   const [cartProducts, setCartProducts] = useState([]);

//   const [quantity, setQuantity] = useState({});

//   const addToCart = (product) => {
//     setCartProducts([...cartProducts, product]);

//     setQuantity((prevQuantity) => ({
//       ...prevQuantity,
//       [product.id]: product.quantity,

//     }));
//   };

//   return (
//     <CartContext.Provider value={{ cartProducts, addToCart ,quantity ,setCartProducts}}>
//       {children}
//     </CartContext.Provider>
//   );
// };
