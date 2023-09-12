import DropdownItem from "./DropdownItem";
import "./Dropdown.css";

function DropdownMenu() {
  
  const menuItems = [
    {
      title: "Pulvinar nostrud class cum facilis?!",
      content:
        "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
    },
    {
      title: "Pulvinar nostrud class cum facilis?!",
      content:
        "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
    },
    {
      title: "Pulvinar nostrud class cum facilis?!",
      content:
        "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
    },
    {
      title: "Pulvinar nostrud class cum facilis?!",
      content:
        "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
    },
    {
      title: "Pulvinar nostrud class cum facilis?!",
      content:
        "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
    },
    {
      title: "Pulvinar nostrud class cum facilis?!",
      content:
        "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
    },
  ];

  return (
    <div className="wrapper-menu-dropdown">
        <img  className='bank' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png" alt="" />
      <div className="top-menu-dropdown">
      <h2>Frequently Asked Question!</h2>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
      </div>
      <div className="container">
          {menuItems.map((item, index) => (
            <DropdownItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
