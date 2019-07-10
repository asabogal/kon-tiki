import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

class Navigation extends Component {
  render() {
    return (
      <div className="landing-navigation">
        <a> <Link to="/">HOME</Link> </a>
        <a> <Link to="/">MENU</Link> </a>
        <a> <Link to="/">RESERVE</Link> </a>
        <a> <Link to="/">CONTACT</Link> </a>
      </div>
    );
  }
}

export default Navigation;