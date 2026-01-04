import React from 'react'
import Banner from './components/Banner'
import Services from './components/service/Service'
import ClientLogosMarquee from './components/ClientLogosMarquee'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientLogosMarquee />
    </div>
  )
}

export default Home