import React, { useState } from 'react'
import Home from '../pages/Home'

const WithLoader = (WrappedComponent : string) => {

 const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
      <div>
        {loading ? <p>Loading...</p> : <WrappedComponent  />}
      </div>
    )

}

export default WithLoader
