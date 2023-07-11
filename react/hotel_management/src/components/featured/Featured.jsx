import React from 'react'
import "./featured.css"
import Mumbai from "../../imgs/Mumbai.jpeg"
import Delhi from "../../imgs/Delhi.jpg"
import Bangalore from "../../imgs/Bengalore.jpg"
import useFetch from '../../hooks/useFetch'

const Featured = () => {
    const { data, loading} =useFetch("/hotels/countByCity?cities=Mumbai,Delhi,Bangalore")
  return (
    <div className='featured'>
        {loading ? ("Loading please wait") :(
        <>
        <div className="featuredItem">
            <img src={Mumbai} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={ Delhi} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Bangalore} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Bangalore</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        </>
        )}
    </div>
  )
}

export default Featured