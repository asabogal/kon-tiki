import React from 'react';
import './style.css'

const MobileMenu = (props) => {

  const handleClick = () => {
    props.toggle()
    document.querySelector('.landing-img').style.display = 'block'
  }

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        <div className="mobile-navigation">
          <div className="landing-home">HOME</div>
          <div className="landing-menu">MENU</div>
          <div className="landing-reserve">RESERVE</div>
          <div className="landing-contact">CONTACT</div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;