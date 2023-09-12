import { ProductsData } from "../../../Data/Product";

import Productpage from "../Productpage";

const Gro = () => {
  return (
    <div>
      <Productpage
        pageTitle={"Groceries"}

        detailpage={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in rerum pariatur provident consequatur alias quam doloremque illum, quae maiore"
        }
        products={ProductsData.Groceries}
        
      />
    </div>
  );
};

export default Gro;
