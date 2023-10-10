import { FaRegHeart } from "react-icons/fa";
import { RestaurantType } from "../type";
import { useNavigate } from 'react-router-dom'



//const RestaurantCard = (restInfo: RestaurantType) => {
  const RestaurantCard = ({restInfo} : {restInfo: RestaurantType}) => {
  const restaurantDetails = restInfo;

  const navigate = useNavigate();

  const goToMenu = () => {
 // navigate("/Bastille", {state:{restInfo: {id: Number, restImage: String, name: String, location: String, menus: []}}})
  console.log("RestCard -- " + restaurantDetails)
  navigate("/RestaurantBranch", {state:{ restInfo: restaurantDetails}})
  }

  return (
    <section className="restaurants"  onClick={() => goToMenu()}> 
        <figure className="restaurantCard">
              <img
                src={restInfo.restImage}
                alt= {restInfo.name}/>
            <figcaption className="lead">
              <div className="restName">
              <h3>{restInfo.name}</h3> 
              </div>
              <div className="heart">
              < FaRegHeart className="styleFa" size={25} />
              </div>
             
            </figcaption>
            <figcaption className="location">
              <p>{restInfo.location}</p>
            </figcaption>
        </figure>
      </section>
  )
}

export default RestaurantCard
