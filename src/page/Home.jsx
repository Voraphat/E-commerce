import Hero from "../component/Home/Hero/Hero"
import Section from '../component/Home/Section/Section'
import Bestproducts from '../component/Home/Bestproducts/Bestproducts'
import Fresh from '../component/Home/Fresh/Fresh'
import Get from '../component/Home/Get/Get'
import Trendingproducts from '../component/Home/Trendingproducts/Trendingproducts'
import Customers from '../component/Home/Customers/Customers'
import Brands from '../component/Home/Brands/Brands'

const Home = () => {
  return (
    <div>
      <Hero/> 
      <Section/> 
      <Bestproducts/> 
      <Fresh/> 
      <Get/> 
      <Trendingproducts/> 
      <Customers/> 
      <Brands/> 
    </div>
  )
}

export default Home
