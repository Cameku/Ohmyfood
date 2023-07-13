import React from 'react'
import ohmyfood from '../images/logo/ohmyfood@2x.svg'

const Home = () => {
  return (
    <div className='home'>
    <div className='paris'><h3> Paris, Belleville</h3></div>
     <div className='bookMenu'>
        <h2>Book the menu you like</h2>
        <p>Discover top-of-the-art restaurants we picked for you</p>
        <div>
            <button className='btn botton'> Explore our restaurants </button>
        </div>
     </div>
    </div>
  )
}

export default Home
