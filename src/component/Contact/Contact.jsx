import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import DropdownMenu from "./Question/DropdownMenu";
import basil from "../../assets/basil.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-detail">
          <img src={basil} alt="" />
          <div className="tel">
            <FaPhone className="icon-contact" />
            <p>+123 456 7890</p>
            <p>+123 456 7890</p>
          </div>
          <div className="email">
            <AiOutlineMail className="icon-contact" />
            <p>info@example.com</p>
            <p>support@example.com</p>
          </div>
          <div className="address">
            <HiLocationMarker className="icon-contact" />
            <p>1569 Ave, New York,</p>
            <p>NY 10028, USA</p>
          </div>
        </div>
      </div>
      <DropdownMenu />
    </div>
  );
};

export default Contact;
