/* eslint-disable react/jsx-key */
import Itembest from "../Bestproducts/Itembest";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/Fresh.jpg";
import img3 from "../../../assets/img2.jpg";
import img4 from "../../../assets/img3.jpg";

import { datatrending } from "../../../Data/Product";

const Trendingproducts = () => {


  return (
    <div className="Bestprodcuts">
      <div className="Best">
        <h2>Trending Products</h2>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
          alt=""
        />
      </div>

      <div className="card1">
        {datatrending.map((e) => {
          return (
            <a href="">
              <Itembest {...e} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Trendingproducts;
