import './Fresh.css'



const Itemfresh = ({heading,detail,bgimg}) => {
    return (
   
        
        <div className='itemfresh'> 
    
        <div className='boxfresh'> 
        <div className="ming">
            <h3>{heading}</h3>
            <p>{detail}</p>
            <button className="btn2">SHOP NOW</button>
        </div>
        <div className="bgimg">
        <img className='bg' src={bgimg} alt="" /> 
        </div>
        </div>
      
        </div>
        
    )
}

export default Itemfresh
