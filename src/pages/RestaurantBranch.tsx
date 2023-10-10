import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MenuType, RestaurantType } from '../type';
import NotFound from './NotFound';
import { useLocation } from 'react-router-dom';
import MenuCard from '../components/MenuCard';




const RestaurantBranch = () => {

  const restInfo : RestaurantType = useLocation().state.restInfo;

  const [menuDetails] = useState<MenuType[]>(restInfo.menus);

  return (
    <div className='restaurantBranch'>
       <div className='branchImg'>
        <img src={restInfo.restImage}
          alt={restInfo.name} />
        </div>
      <section className='branchHeader'> 
        <figcaption className="menuHeader">
       
          <h2>{restInfo.name}</h2>
          
          <div className='heart'>
          < FaRegHeart size={25} />
          </div>
         
        </figcaption>
      </section>
      {
        menuDetails?.length > 0 ? (
          menuDetails.map((menu, index) => (
            <div key={index} className='displayMenu'>
              <MenuCard menuInfo={menu} />
            </div>
          ))
        ) : (
          <div> <NotFound /> </div>
        )
      }
    </div>
  )
}

export default RestaurantBranch
