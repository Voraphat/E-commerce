import "./Certified.css";
import "swiper/css";


import image1 from "../../../assets/image01.jpg";
import farming03 from "../../../assets/farming03.jpg";
import farming04 from "../../../assets/farming04.jpg";
import client02 from "../../../assets/client02.png";
import organic from "../../../assets/organic.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { BsCheckCircle } from "react-icons/bs";

const Certified = () => {
  return (
    <div className="cert">
      <div className="container">
        

        <div className="cert-left">
          <div className="card-cert">


            <Swiper className="mySwiper" slidesPerView={1}  >

              <SwiperSlide>
                <img src={image1} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={farming03} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={farming04} alt="" />
              </SwiperSlide>

            </Swiper>


            
          </div>






          <div className="text-card-cert">
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="img-card-cert">
              <img src={client02} alt="" />
              <p>Mila Kunit</p>
            </div>
          </div>
        </div>

        <div className="cert-right">
          <div className="img-cert">
            <img src={organic} alt="" />
            <div className="text-cert-right">
              <h3>Certified Products</h3>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>

          <div className="about-cert-top">
            <h2>We Deal With Various Quality Organic Products!</h2>
            <div className="img-about-cert">
              <img
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                alt=""
              />
            </div>
          </div>

          <div className="menu-cert">
            <ul className="ul-left">
              <li>
                <BsCheckCircle className="icon-cert" />
                Fresh fruits
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Dry fruits
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Fresh vegetables
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Dried vegetables
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Dried vegetables
              </li>
            </ul>

            <ul className="ul-right">
              <li>
                <BsCheckCircle className="icon-cert" />
                Beauty products
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Milk products
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Organic honey
              </li>
              <li>
                <BsCheckCircle className="icon-cert" />
                Organic tea
              </li>
            </ul>
            <button>Start Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
