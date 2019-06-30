import React, { Component } from 'react';
import './style.css'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div>HOME</div>
        <div>MENU</div>
        <div>RESERVE</div>
        <div>CONTACT</div>
      </div>
    );
  }
}

export default Navigation;