import React from 'react'
import "./propertyList.css"
import Hotel from "../../imgs/hotel.jpeg"
import Apartment from "../../imgs/apartment.jpg"
import Resort from "../../imgs/resort.jpeg"
import Cabin from "../../imgs/cabin.jpeg"
import Villa from "../../imgs/villas.jpeg"
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {
    const { data, loading} =useFetch("/hotels/countByType");

    const images=[
        Hotel,
        Apartment,
        Resort,
        Villa,
        Cabin 
    ]

    return (
        <div className="pList">
          {loading ? (
            "Loading"
          ) : (
            <>
              {data &&
                images.map((img,i) => (
                  <div className="pListItem" key={i}>
                    <img
                      src={img}
                      alt=""
                      className="pListImg"
                    />
                    <div className="pListTitles">
                      <h1>{data[i]?.type}</h1>
                      <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      );
    };
    
export default PropertyList