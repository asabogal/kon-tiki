import React from 'react';
import './style.css'
import instagram from '../../resources/icons/instagram.png'
import facebook from '../../resources/icons/facebook.png'
import twitter from '../../resources/icons/twitter.png'

const Header = () => {
  return (
    <div className="landing-header">
      <a href="https://www.instagram.com/kontiki.gp/">
        <img src={instagram} alt="instagram"/>
      </a>
      
      <a href="https://twitter.com/kontikiny?lang=en">
        <img src={facebook} alt="facebook"/>
      </a>
    
      <a href="https://twitter.com/kontikiny?lang=en">
        <img src={twitter} alt="twitter"/>
      </a>
    </div>
  );
};

export default Header;