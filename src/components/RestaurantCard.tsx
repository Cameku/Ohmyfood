import { FaRegHeart } from "react-icons/fa";
import { RestaurantType } from "../type";
import { useNavigate } from 'react-router-dom'


const RestaurantCard = (restInfo: RestaurantType) => {

  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/Bastille")
  }

  return (
    <section className="restaurants"  onClick={goToMenu}> 
        <figure className="restaurantCard">
              <img
                src={restInfo.restImage}
                alt= {restInfo.name}/>
            <figcaption className="lead">
              <h3>{restInfo.name}</h3> < FaRegHeart size={25} />
            </figcaption>
            <figcaption className="location">
              <p>{restInfo.location}</p>
            </figcaption>
        </figure>
      </section>
  )
}

export default RestaurantCard
