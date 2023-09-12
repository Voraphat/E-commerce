import '../../Productpage.css'


// eslint-disable-next-line react/prop-types
const Itemevery = ({Head,detail,img,para,onProductClick}) => {
  return (
    
    
      <div className="text-productpage" onClick={onProductClick} > 
        <img className='imgproductpage'src={img} alt="" />

        <div className="textproductpage">
          
              <span>{detail}</span>
              <h4>{Head}</h4>
              <p>{para}.00 $</p>

        </div>
      </div>
  )
}

export default Itemevery
