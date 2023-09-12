import { ProductsData } from "../../../Data/Product";
import Productpage from "../Productpage";


const Every = () => {

  const allProducts = [...ProductsData.Groceries,...ProductsData.Juicedata];

  return (
    <div>
      <Productpage pageTitle={"Shop"} 
      products = {allProducts} />

    </div>
  );
};

export default Every;
