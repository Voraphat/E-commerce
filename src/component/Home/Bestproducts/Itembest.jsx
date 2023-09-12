







const Itembest = ({id,para,Head,detail,img}) => {
  return (

      <div className="Text"> 

        <img className='imgbest'src={img} alt="" />
        <div className="overlay" key={id}>
              <span>{detail}</span>
              <h4>{Head}</h4>
              <p>{para}</p>
        </div>
        
      </div>       

  )
}

export default Itembest
