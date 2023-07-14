import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Room1 from "../../imgs/room1.jpeg"
import Room2 from "../../imgs/room2.jpeg"
import Room3 from "../../imgs/room3.jpeg"
import Room4 from "../../imgs/room4.jpeg"
import Room5 from "../../imgs/room5.jpeg"

const FeaturedProperties = () => {
const { data, loading } = useFetch("/hotels?featured=true");

const photos =[
    Room1,
    Room2,
    Room3,
    Room4,
    Room5
]

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {photos&&data.map((item,i) => (
            <div className="fpItem" key={item._id}>
              <img
                src={photos[i]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;