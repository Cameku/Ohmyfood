import { FaMapMarkerAlt, FaMobileAlt, FaList, FaStore } from "react-icons/fa";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import { ApiHelper } from "../apiHelper/ApiHelper";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { RestaurantType } from '../type';
import NotFound from "./NotFound";
import WithLoader from "../components/WithLoader";


const Home = () => {

const [restaurantDetails, setrestaurantDetails] = useState<RestaurantType[]>([]);

const apiHelper = new ApiHelper;

const getData = async () => {
const restData = await apiHelper.getApiData();

console.log(restData);
setrestaurantDetails(restData);
}


useEffect(() => {
  getData();
}, []) 

  return (
    <main className="home">
      <div className="paris">
        <h3>
          <FaMapMarkerAlt className="parisIcon"/> Paris, Belleville
        </h3>
      </div>
      <section className="bookMenu">
        <h2 className="book">Book the menu you like</h2>
        <div className="para">
          <p>
            Discover top-of-the-art restaurants we<br />
            picked for you
          </p>
        </div>
        <div className="homeBtn">
          <button className="btn botton"> Explore our restaurants </button>
        </div>
      </section>
      <section className="works">
        <div className="howitworks">
          <h2>How it works</h2>
        </div>
        <div className="chose">
          <div className="working">
           <div> < Bs1CircleFill /></div>
           <div><FaMobileAlt /> Chose a restaurant</div>
          </div>
        </div>
        <div className="chose">
          <div className="working">
          <div> < Bs2CircleFill /></div>
            <p> <FaList /> Create your menu</p>
          </div>
        </div>
        <div className="chose">
          <div className="working">
          <div> < Bs3CircleFill /></div>
            <p> <FaStore /> Go enjoy it at the restaurant</p>
          </div>
        </div>
      </section>
      <section className="restaurants">
      <div className="restHeader">
          <h2>Restaurants</h2>
        </div>
      {
        restaurantDetails?.length > 0 ? (
          restaurantDetails.map((restaurant, index) => (
            <div key={index}>
                <RestaurantCard id={restaurant.id} restImage={restaurant.restImage} name={restaurant.name} location={restaurant.location} menus={restaurant.menus}/>
            </div>
          ))
        ) : (
          <div> <NotFound /> </div>
        )
      }
    </section>
    </main>
  );
};

export default Home;
