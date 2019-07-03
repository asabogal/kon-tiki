import React, { Component } from 'react';
import './style.css'
import instagram from '../../resources/icons/instagram.png'
import facebook from '../../resources/icons/facebook.png'
import twitter from '../../resources/icons/twitter.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  renderIcons = () => {
    return (
      <div>
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
    )
  }

  render() {
    return (
      <div className="landing-header">    
        {this.renderIcons()}
      </div>  
    );
  }
}

export default Header;