import "./Bestproducts.css";

import Itembest from "./Itembest";
import { databest } from "../../../Data/Product";



const Bestproducts = () => {


  return (
    <div className="Bestprodcuts">
      


      <div className="Best">
        <h2>Best Selling Products</h2>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
          alt=""
        />
      </div>

      <div className="card1">



      {databest.map((e) => {
          // eslint-disable-next-line react/jsx-key
          return  <a href=""> 
          
          <Itembest {...e}/> </a>

        
        })}
      </div>

    </div>
  );
};

export default Bestproducts;
{


{/* <a href="">
          {" "}

          <Card
            img={databest[0].img}
            Head={databest[0].Head}
            detail={databest[0].detail}
            para={databest[0].para}
          />
          
        </a>


        
        <a href="">
          {" "}
          <Itembest
            img={databest[1].img}
            Head={databest[1].Head}
            detail={databest[1].detail}
            para={databest[1].para}
          />
        </a>

        <a href="">
          {" "}
          <Itembest
            img={databest[2].img}
            Head={databest[2].Head}
            detail={databest[2].detail}
            para={databest[2].para}
          />
        </a>
        <a href="">
          {" "}
          <Itembest
            img={databest[3].img}
            Head={databest[3].Head}
            detail={databest[3].detail}
            para={databest[3].para}
          />
        </a> */}








  /* <div className="show" >

            <div className="card1">
            <img className='cardimg' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg" alt="" />
            <div className="textshow">Groceries</div>
            <h3 className='detail'>Assorted Coffee</h3>
            <span><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></span>
            <p>$35.00</p>
            </div>

            <div className="card1">
            <img className='cardimg' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg" alt="" />
            <div className="textshow">Groceries</div>
            <h3 className='detail'>Hand Sanitizer</h3>
            <span><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></span>
            <p>$15.00</p>
            </div>

            <div className="card1">
            <img className='cardimg' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg" alt="" />
            <div className="textshow">Groceries</div>
            <h3 className='detail'>Handpicked Red Chillies</h3>
            <span><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></span>
            <p>$19.00</p>
            </div>

            <div className="card1">
            <img className='cardimg' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg" alt="" />
            <div className="textshow">Groceries</div>
            <h3 className='detail'>Natural Extracted Edible Oil</h3>
            <span><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></span>
            <p>$25.00</p>
            </div>
        </div> */
}
