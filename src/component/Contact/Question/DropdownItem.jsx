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
       
            <p>
              {title}
              <IoMdArrowDropright />
            </p>
          ) : (
            <p>
              {title}
              <IoMdArrowDropdown />
            </p>
          )}
        </div>

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

