import CountUp from "react-countup";
import "./Number.css";

const Number = () => {
  return (
    <div className="count">
      <div className="container">
        <div className="text-count">
          <h3>Numbers speak for Themselves!</h3>
        </div>

        <div className="number">
          <div className="card-number">
            <span className="num_run">
              <CountUp start={4800} end={5000} duration={5} />
              <span>+</span>
            </span>
            <div className="text-card-number">Curated Products</div>
          </div>

          <div className="card-number">
            <span className="num_run">
              <CountUp start={0} end={800} duration={5} />
              <span>+</span>
            </span>
            <div className="text-card-number">Curated Products</div>
          </div>

          <div className="card-number">
            <span className="num_run">
              <CountUp start={0} end={40} duration={5} />
              <span>+</span>
            </span>
            <div className="text-card-number">Product Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
