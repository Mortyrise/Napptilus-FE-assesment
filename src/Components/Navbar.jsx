import { createAction } from '@reduxjs/toolkit';
import React from 'react';
import { BsBagDash } from 'react-icons/bs';
import '../Styles/Navbar.css';

function Header() {
  let cart;

  return (
    <div className='navbar-container'>
      <div>
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1280px-Zara_Logo.svg.png'
          }
          alt='zara-logo'
          height={50}
        />
      </div>
      <div className='cart-container'>
        <BsBagDash size={25} />
        <p>{cart?.length || 'notYet'}</p>
      </div>
    </div>
  );
}

export default Header;
