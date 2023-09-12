import img4 from "../../../../assets/img4.jpg";
import img2 from "../../../../assets/img2.jpg";
import wheat from "../../../../assets/Wheat.jpg";
import { ProductsData } from "../../../../Data/Product";
import './Itemleft.css'



// eslint-disable-next-line react/prop-types
const Itemleft = ({searchTerm,handleSearch,}) => {
  // console.log("products",ProductsData.Groceries,ProductsData.Juicedata)

  return (
        <div className="left">
          <form className="form">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </form>

          <ul >

            <div className="menu-product">
            <li>Groceries </li>
            <p>({ProductsData.Groceries.length})</p>
            </div>

            <div className="menu-product">
            <li>Juice </li>
            <p>({ProductsData.Juicedata.length})</p>
            </div>
          </ul>

          <div className="card-filter">
            <img src={img4} alt="" />
            <p>Natural Extraced Edible Oil</p>
            <span>25.00$</span>
          </div>

          <div className="card-filter">
            <img src={img2} alt="" />
            <p>Natural Extraced Edible Oil</p>
            <span>25.00$</span>
          </div>

          <div className="card-filter">
            <img src={wheat} alt="" />
            <p>Natural Extraced Edible Oil</p>
            <span>25.00$</span>
          </div>
        </div>
  )
}

export default Itemleft
