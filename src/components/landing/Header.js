import React, { Component } from 'react';
import BugerButton from '../navigation/BugerButton'
import MobileMenu from '../navigation/MobileMenu'
import Navigation from './Navigation'
import './style.css'
import instagram from '../../resources/icons/instagram.png'
import facebook from '../../resources/icons/facebook.png'
import twitter from '../../resources/icons/twitter.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderSocial = () => {
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

  renderMenu = () => {
    return this.state.isOpen ? <MobileMenu toggle={this.toggle} content={<Navigation/>}/> : <BugerButton toggle={this.toggle}/>
  }

  render() {
    return (
      <div className="landing-header">    
        {this.renderMenu()}
        {this.renderSocial()}
      </div>  
    );
  }
}

export default Header;