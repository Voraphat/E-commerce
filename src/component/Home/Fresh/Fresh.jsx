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

{
  /* <Itemfresh Head={e.Head} detail={e.detail} para={e.para} img={e.img}/> */
}

{
  /* <div className="card2"> 
          <Itemfresh
          heading={datafresh[0].heading}
          detail={datafresh[0].detail}
          bgimg={datafresh[0].bgimg}
          />
        </div>

        <div className="card2"> 
          <Itemfresh
          heading={datafresh[1].heading}
          detail={datafresh[1].detail}
          bgimg={datafresh[1].bgimg}
          />
        </div>

        <div className="card2"> 
          <Itemfresh
          heading={datafresh[2].heading}
          detail={datafresh[2].detail}
          bgimg={datafresh[2].bgimg}
          />
        </div> */
}
