import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import "./Dropdown.css";

function DropdownItem({ title, content }) {
  const [Open, setOpen] = useState(false);


  const handleToggle = () => {
    setOpen(!Open);
  };

  return (
    <div className="dropdownitem">
      <div className="wrapper-item-dropdown">
        <div ref={parent}  onClick={handleToggle}>
          {!Open ? (
            // หัวข้อก่อนกด
            <p>
              {title}
              <IoMdArrowDropright />
            </p>
          ) : (
            // หัวข้อหลังกด
            <p>
              {title}
              <IoMdArrowDropdown />
            </p>
          )}
        </div>

            {/* เนื้อหาเมื่อกดดรอปดาว */}
        {Open && (
          <div className="content-dropdown">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownItem;

