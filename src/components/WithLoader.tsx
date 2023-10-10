import { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import RestaurantBranch from '../pages/RestaurantBranch';



const WithLoader = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);

  }, [])
  return (
    <div className='loader'>
      {
        loading ?
          <BeatLoader
            loading={loading}
            color={'#9356DC'}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <RestaurantBranch />
      }
    </div>
  )

}

export default WithLoader
