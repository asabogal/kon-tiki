import React, { Component } from 'react';
import './style.css'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="landing-home">HOME</div>
        <div className="landing-menu">MENU</div>
        <div className="landing-reserve">RESERVE</div>
        <div className="landing-contact">CONTACT</div>
      </div>
    );
  }
}

export default Navigation;