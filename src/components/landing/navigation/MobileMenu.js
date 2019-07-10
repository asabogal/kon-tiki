import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const MobileMenu = (props) => {

  const handleClick = () => {
    props.toggle()
    document.querySelector('.landing-img').style.display = 'block'
    document.querySelector('.landing-navigation').style.display = 'flex'
  }

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        <a> <Link to="/">HOME</Link> </a>
        <a> <Link to="/">MENU</Link> </a>
        <a> <Link to="/">RESERVE</Link> </a>
        <a> <Link to="/">CONTACT</Link> </a>
      </div>
    </div>
  );
};

export default MobileMenu;