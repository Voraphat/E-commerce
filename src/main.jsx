import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Everythingpage from "./page/Everythingpage.jsx";
import Groceriespage from "./page/Groceriespage.jsx";
import Juicepage from "./page/Juicepage.jsx";
import Aboutpage from "./page/Aboutpage.jsx";
import Contactpage from "./page/Contactpage.jsx";
import ProductDetailpage from "./page/ProductDetailpage.jsx";
import Cartpage from "./page/Cartpage.jsx"
import { CartContextProvider } from "./function/CartContext";
import Checkoutpage from "./page/Checkoutpage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/everything",
    element: <Everythingpage />,
  },
  {
    path: "/groceries",
    element: <Groceriespage />,
  },
  {
    path: "/juice",
    element: <Juicepage />,
  },
  {
    path: "/about",
    element: <Aboutpage />,
  },
  {
    path: "/contact",
    element: <Contactpage />,
  },
  {
    path: "/productdetail/:id",
    element: <ProductDetailpage />,
  },

  {
    path: "/cartproduct",
    element: <Cartpage/>,
  },
  {
    path: "/checkout",
    element: <Checkoutpage />,
  },
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>


    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>


  </React.StrictMode>
);
