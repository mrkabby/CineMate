import React from 'react'
import Banner from '../banner/Banner'
import Trend from '../trend/Trend'
import Main from '../main/Main'
import TopRated from '../top rated/TopRated'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <TopRated />
      <Trend />
      <Footer />

    </>
  )
}

export default LandingPage