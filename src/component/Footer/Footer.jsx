import './Footer.css'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import organic from '../../assets/organic-store-white-logo.png'



const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
      <div className="footer-left">
        <img src={organic} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, mollitia deleniti aut vitae dolor sequi. Dolorum tempora impedit dolor illum ipsa velit beatae non veritatis.</p>
      </div>



      <div className="footer-center">

        <div className='text-footer-center-buttom'>
        <h4>QUick Links</h4>
        <ul>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Cart</li></a>
            <a href="#"><li>Checkout</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>My account</li></a>
            <a href="#"><li>Shop</li></a>
        </ul>
        </div>

        <div className='text-footer-center-buttom'>
        <h4>Site Links</h4>
        <ul>
          <a href="#"><li>Privacy Policy</li></a>
          <a href="#"><li>Shipping Details</li></a>
          <a href="#"><li>Offers Coupons</li></a>
          <a href="#"><li>Terms & Coditions</li></a>
        </ul>
        </div>
      </div>

      <div className="footer-right">
      <div className='text-footer-right-top'>
        <h4>Download Our Mobile App</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore perferendis numquam repellendus odit doloribus repellat, nesciunt earum. Repellendus modi, velit odio atque ex quidem!</p>
      </div>


      <div className='text-footer-right-buttom'>
        <h4>Quick Links</h4>
        <ul>
        <a href="#"><li>Know More About us</li></a>
        <a href="#"><li>Visie Store</li></a>
        <a href="#"><li>Let's Connect</li></a>
        <a href="#"><li>Locate Stores</li></a>
        </ul>
      </div>
      </div>
    </div>

    <div className="footer-buttom">
        <div className='text-right-footer-buttom'>
        <p>Copyright © 2023 | Organic Store</p>
        </div>
        <div className='icon-footer'>
            <a href="https://github.com/dashboard"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/voraphat-rongronglarp-929165245/"><AiFillLinkedin/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
