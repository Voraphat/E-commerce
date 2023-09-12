import "./Navbar.css";
import { BsFillBasketFill, BsFillPersonFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../function/CartContext";
import CartModal from "./CartModal/CartModal";



const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const { cartProducts } = useContext(CartContext);
  
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = () => {
    setShowCartModal(!showCartModal);
    if (!showCartModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  document.body.addEventListener('click', function (event) {
    if (event.target === document.body && showCartModal) {
      handleCartModal();
    }
  });

  return (
    
    <div className="navbar">
      
      <div className="just">
        <Link to="/">
          <img
            className="logo"
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
            alt="Organic Store"
          />
        </Link>

        <div className="menu">
          <div className="menu-left">
            <ul className="menu-l">

              <Link to="/everything">
                <li>Everything</li>
              </Link>

              <Link to="/groceries">
                <li>Groceries</li>
              </Link>
              <Link to="/juice">
                <li>Juice</li>
              </Link>
            </ul>
          </div>

          <div className="menu-right">
            <ul className="menu-r">
              <Link to="/About">
                <li>About</li>
              </Link>
              <Link to="/Contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>


        <div className="nav-icon">
          <div className="cart">
            <p onClick={handleCartModal}>
              <BsFillBasketFill
                className="icon"
                style={{ marginRight: "1rem" }}
                color="#8bc34a"
              />
            </p>
            <p className="numberofcart"> {cartProducts.length}</p>
          </div>
          <BsFillPersonFill className="icon-preson " />
        </div>


        <div className="box">
          <div className="" onClick={handleNav}>
            {!nav ? <AiOutlineMenu className="hamburger icon" /> : ""}
          </div>
        </div>
      </div>

      <CartModal
        showCartModal={showCartModal}
        handleCartModal={handleCartModal}
      />


      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <div className="icon_mobile">
          <BsFillPersonFill className="icon-menu" />
          <GrClose
            style={{ color: "#000" }}
            className="icon-menu"
            onClick={handleNav}
          />
        </div>
        <ul>
          <Link to="/Everything">
            <li>Everything</li>
          </Link>
          <Link to="/Groceries">
            <li>Groceries</li>
          </Link>
          <Link to="/Juice">
            <li>Juice</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      
    </div>
  );
};



export default Navbar;
