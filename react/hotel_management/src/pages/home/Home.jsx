import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Places from "../../imgs/Places.gif"
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
        <div className="homeImage">
          <img className="img1" src={Places} alt='' />
          <br />
          <br />
          <br />
        </div>
        <br />
        <div className="homeTitle1">Popular Places</div>
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
        <div className="homeTitle">Places guests love</div>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home