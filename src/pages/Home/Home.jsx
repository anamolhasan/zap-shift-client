import React from 'react'
import Banner from './components/Banner'
import Services from './components/service/Service'
import ClientLogosMarquee from './components/ClientLogosMarquee'

import Benefits from './components/Benefits/Benefits'
import BeMerchant from './components/BeMerchant'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientLogosMarquee />
      <Benefits />
      <BeMerchant />
    </div>
  )
}

export default Home