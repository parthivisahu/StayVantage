 import React from 'react'
 import "./featuredProperties.css"
 import Room1 from "../../imgs/room1.jpeg"
 import Room2 from "../../imgs/room2.jpeg"
 import Room3 from "../../imgs/room3.jpeg"
 import Room4 from "../../imgs/room4.jpeg"
import useFetch from '../../hooks/useFetch'

 const FeaturedProperties = () => {
    const {data, loading, error} = useFetch
   return (
    <div className="fp">
        <div className="fpItem">
            <img src={Room1} alt="" className="fpImg" />
            <span className="fpName">The Serenity Pines Retreat</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from ₹1200</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src={Room2} alt="" className="fpImg" />
            <span className="fpName">Sunset Haven Inn</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from ₹1500</span>
            <div className="fpRating">
                <button>8.5</button>
                <span>Very Good</span>
            </div>
        </div><div className="fpItem">
            <img src={Room3} alt="" className="fpImg" />
            <span className="fpName">Whispering Willow Manor</span>
            <span className="fpCity">Delhi</span>
            <span className="fpPrice">Starting from ₹1800</span>
            <div className="fpRating">
                <button>7.6</button>
                <span>Good</span>
            </div>
        </div><div className="fpItem">
            <img src={Room4} alt="" className="fpImg" />
            <span className="fpName">Harmony Springs Lodge</span>
            <span className="fpCity">Bangalore</span>
            <span className="fpPrice">Starting from ₹1000</span>
            <div className="fpRating">
                <button>8.2</button>
                <span>Very Good</span>
            </div>
        </div>
     </div>
     
   )
 }
 
 export default FeaturedProperties