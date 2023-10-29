import { ProductsData } from "../../../Data/Product";

import Productpage from "../Productpage";

const Juice = () => {
  return (
    <div>

      <Productpage 



        pageTitle={"Juice"}

        detailpage={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in rerum pariatur provident consequatur alias quam doloremque illum, quae maiore"
        }

        products = {ProductsData.Juicedata}

      />

    </div>
  );
};

export default Juice;
