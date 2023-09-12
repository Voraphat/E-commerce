import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Contact from '../component/Contact/Contact'


const Contactpage = () => {
  return (
    <div>
      <Navbar />
        <h1 style={{textAlign: "center" ,margin:100}} >Get In Touch</h1>
        <Contact/>
      <Footer/>
    </div>
  )
    }

export default Contactpage