import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// import Scroller from './Components/Scroller/Scroller'
import Cards from './Components/Cards/Cards'
import "./Home.css"


function Home() {
  return (
    <div className='home-page'>
            <Header />
            {/* <Scroller /> */}
            <Cards />
            <Footer />
            



    </div>
  )
}

export default Home
