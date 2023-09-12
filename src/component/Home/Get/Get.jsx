import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Get.css'

const Get = () => {
  return (
    <div className='Get'>
      
      <div className="box-text-get">
      <div className='box-sc'></div>
      <div className="text-get">
        <h2>Get 25% Off On Your First Purchase!</h2>
         <button className="btn2"> <AiOutlineShoppingCart className="cart"/>SHOP NOW</button>
      </div>
      </div>
    <div className="box-text-try">
        <div className="try">
        <h3>Try It For Free. No Registration Needed.</h3>
        </div>
    </div>
      

    </div>
  )
}

export default Get
