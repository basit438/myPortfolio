import React from 'react'
import './Home.css'
// import Header from '../header'
import "../../../App.css";
import Social from '../home/Social'
import Data from '../home/Data'
import ScrollDown from '../home/ScrollDown'



function Home() {
  return (
    <>
    <section className="homesection" id="home">

      <div className="homecontainer container grid" >

        <div className="homecontent grid">
          <Social/>

          <div className="home-img"></div>

          <Data/>

          
          
           </div>
      </div>
    </section>
    </>
  )
}

export default Home
