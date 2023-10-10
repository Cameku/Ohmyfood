import { FaEuroSign } from "react-icons/fa";
import { MenuType } from "../type";
import { useLocation } from "react-router-dom";


const MenuCard = ({menuInfo}: {menuInfo: MenuType}) => {

 const {state} = useLocation();

  return (
    <section>
      <figure className="menuCard">
        <div className="entrees">
            <div className="cardType">  <h3> {menuInfo.type}</h3></div>
          <figcaption className="menuInfo">
            <div className="menuName">
                <b>{ menuInfo.name}</b>
            </div>
            <div className="descAndPrice">
            <div className="menuDesc">
                <p>{menuInfo.description}</p>
            </div>
            <div className="menuPrice">
            <p><b>{menuInfo.price}</b><FaEuroSign /></p>
            </div>
            </div>
          </figcaption>
        </div>
      </figure>
      <br /><br />
    </section>
  );
};

export default MenuCard;
