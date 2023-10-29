import './Customers.css'
import {BsStarFill} from 'react-icons/bs'
import sydney from '../../../assets/sydney-rae-668606-unsplash.jpg'
import bgcustomer from '../../../assets/logo-leaf2-free-img.png'


const Customers = () => {
  return (
    <div className='customers'>

      <img  className='bg-customer'src={bgcustomer} alt="" />
      
    <div className="container">
    <div className='customers_header'>     
      <h2>Customers Reviews</h2>
      <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
          alt=""
        />
      </div>

      
    <div className="card-customer-m">


      <div className="card-customer">
        <div className="icon-start-customer">
        <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
        </div>
        <div className="content-card-customer">
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="person">
          <div className='img-customer'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png" alt="" />
          </div>
          <div className="name-customer">
            Mila Kunis
          </div>
        </div>
      </div>


      <div className="card-promote">
      <img src={sydney} alt="" />
        <div className="content-card-promote">
          <h2 >
            Deal Of The Day 15% Off On All Vegetables!
          </h2>
          <p>
            I am text block. Click edit button to change this tex em ips.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>



      <div className="card-customer">
        <div className="icon-start-customer">
        <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
        </div>
        <div className="content-card-customer">
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="person">
          <div className='img-customer'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png" alt="" />
          </div>
          <div className="name-customer">
            Mila Kunis
          </div>
        </div>
      </div>
      </div>
    </div>
   </div>

  )
}

export default Customers
