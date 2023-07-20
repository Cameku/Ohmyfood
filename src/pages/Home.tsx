import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaList,
  FaStore,
  FaRegHeart,
} from "react-icons/fa";

import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <main className="home">
      <div className="paris">
        <h3>
          <FaMapMarkerAlt /> Paris, Belleville
        </h3>
      </div>
      <section className="bookMenu">
        <h2 className="book">Book the menu you like</h2>
        <div className="para">
          <p>
            Discover top-of-the-art restaurants we
            <br /> picked for you
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
        <div className="restText">
          <h2>Restaurants</h2>
        </div>
        <figure className="restaurantCard">
              <img
                src={require("../images/restaurants/jay-wennington.jpg")}
                alt="Jay Wennington Restaurant"/>
            <figcaption className="lead">
              <h3>The Full Palette</h3> < FaRegHeart size={25} />
            </figcaption>
            <figcaption className="location">
              <p>New York</p>
            </figcaption>
        </figure>
        <figure className="restaurantCard">
              <img
                src={require("../images/restaurants/stil-unsplash.jpg")}
                alt="The Enchanted Plate Restaurant"  />

          <figcaption className="lead">
              <h3>The Enchanted Plate</h3>  <FaRegHeart size={25} />
            </figcaption>
            <figcaption className="location">
              <p>New York</p>
            </figcaption>
          
        </figure>
        <figure className="restaurantCard">
              <img
                src={require("../images/restaurants/toa-unsplash.jpg")}
                alt="The Bastille Restaurant" />
            <figcaption className="lead">
              <h3>Bastille</h3>  < FaRegHeart size={25} />
            </figcaption>
            <figcaption className="location">
              <p>New York</p>
            </figcaption>
          
        </figure>
        <figure className="restaurantCard">
              <img
                src={require("../images/restaurants/louis-hansel.jpg")}
                alt="The Le Gourmand Restaurant"  />
            
            <figcaption className="lead">
              <h3>Le Gourmand</h3>  < FaRegHeart size={25} />
            </figcaption>
            <figcaption className="location">
              <p>New York</p>
            </figcaption>
       
        </figure>
      </section>
    </main>
  );
};

export default Home;
