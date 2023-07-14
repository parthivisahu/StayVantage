import { Link } from "react-router-dom";
import "./searchItem.css";
import Room1 from "../../imgs/room1.jpeg"
import Room2 from "../../imgs/room2.jpeg"
// import Room3 from "../../imgs/room3.jpeg"
// import Room4 from "../../imgs/room4.jpeg"
import useFetch from "../../hooks/useFetch";

const SearchItem = ({ item }) => {
  const {loading } = useFetch("");
  const photos =[
    Room1,
    Room2
  ];
  return (
    <div className="searchItem">
       {loading ? (
  "Loading"
) : (
  <>
    {photos.map((photo, index) => (
      <div key={index}>
        <img src={photo} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">{item.desc}</span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
          )}
          <div className="siDetailTexts">
            <span className="siPrice">₹{item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
)}
    </div>
  );
};

export default SearchItem;