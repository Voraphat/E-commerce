import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import About from '../component/About/About'
import Number from '../component/About/Numbers/Number'
import Certified from '../component/About/Certified/Certified'

const Aboutpage = () => {
  return (
    <div>
      <Navbar/>
        <About/>
        <Number/>
        <Certified/>
      <Footer/>
    </div>
  )
}

export default Aboutpage
