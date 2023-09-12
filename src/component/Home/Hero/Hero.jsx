import "./Hero.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Hero = () => {
  return (
    
    <div className="hero">
      <img  className=' bank 'src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png" alt="" />
      
      <div className="container">
        <img
          id="img"
          className="left"
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
          alt=""
        />

        <div className="content">
          
          <div className="text">
            <div className="tree">
              <img
                className="img-head"
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                alt=""
              />
            </div>

            <div className="text1">
              <h3>Best Quality Products</h3>
            </div>

            <div className="text2">
              <h1 className=" join">Join The Organic </h1>
              <h1>Movement!</h1>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              magnam minima incidunt suscipit eum molestiae.
            </p>

            <div className="btn">
              <button className="btn2"> <AiOutlineShoppingCart className="cart"/>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
