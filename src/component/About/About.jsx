import basil from "../../assets/basil.png";
import banner from "../../assets/banner.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
            <h1>About us</h1>
      <div className="container">
        
        <div className="about-top">
          <div className="img-about">
            <img src={basil} alt="" />
          </div>
        </div>

        <div className="about-buttom">
          
          <div className="letf-about">
            <h2>We Are Your Favourite Store.</h2>
            <p>
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultrices consequuntur numqu.
            </p>
            <p>
              Officiis fuga harum porro et? Similique rhoncus atque! Netus
              blanditiis provident nunc posuere. Rem sequi, commodo, lorem
              tellus elit, hic sem tenetur anim amet quas, malesuada proident
              platea corrupti expedita.
            </p>
          </div>

          <div className="right-about">
            <div className="img-right-about">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default About;
