import "./Fresh.css";
import "./Itemfresh";
import Itemfresh from "./Itemfresh";
import basil from "../../../assets/basil.png";
import { datafresh } from "../../../Data/Product";

const Fresh = () => {
  return (
    <div className="fresh">
      <div className="basil">
        <img src={basil} alt="" />
      </div>

      <div className="card2">
        {datafresh.map((e) => {
          return <Itemfresh {...e} key={e.id} />;
        })}
      </div>
    </div>
  );
};

export default Fresh;




