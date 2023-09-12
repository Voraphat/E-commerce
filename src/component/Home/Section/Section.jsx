import "./Section.css";
import { BiSolidTruck } from "react-icons/bi";
import { FaAddressBook, FaRegMoneyBillAlt, FaRecycle } from "react-icons/fa";


const Section = () => {
  return (
    <div className="section">
      <div className="container">

        <div className="box">

          <div className="card">
            <div className="icon-section">
              <BiSolidTruck style={{}}  color="#8bc34a" />
            </div>
            <div className="message">
            <h4>
              <a href="">Free Shipping</a>
            </h4>
            <p>Above $5 only</p>
          </div>
          </div>

          <div className="card">
            <div className="icon-section">
              <FaAddressBook style={{}}color="#8bc34a" />
            </div>
            <div className="message">
            <h4>
              <a href="">Certifiled Organic</a>{" "}
            </h4>
            <p>100% Guarantee</p>
          </div>
          </div>

          <div className="card">
            <div className="icon-section">
              <FaRegMoneyBillAlt style={{}}color="#8bc34a" />
            </div>
            <div className="message">
            <h4>
              <a href="">Hug Savings</a>
            </h4>
            <p>At Lowest Price</p>
          </div>
          </div>

          <div className="card">
            <div className="icon-section" >
              <FaRecycle style={{}}color="#8bc34a"   />
            </div>
            <div className="message">
            <h4>
              <a href="">Easy Returns</a>
            </h4>
            <p>No Questions Asked</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
