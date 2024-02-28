import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Crops from '../components/Crops'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
          <Navbar />
          <Hero />
          <Services />
          <Crops />
          <Benefits />
    </div>
  )
}

export default Home