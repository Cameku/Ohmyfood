import React from 'react';
import ohmyfood from '../images/logo/ohmyfood@2x.svg'

const Header = () => {
  return (
    <div>
    <img src={ohmyfood} className='logo' alt='Ohmyfood logo' />
    <br />
    <button className='btn'> Click here</button>
    </div>
  )
}

export default Header
