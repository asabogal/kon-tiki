import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

class Navigation extends Component {
  render() {
    return (
      <div className="landing-navigation">
        <ul>
          <li> <Link to="/">HOME</Link> </li>
          <li> <Link to="/">MENU</Link> </li>
          <li> <Link to="/">RESERVE</Link> </li>
          <li> <Link to="/">CONTACT</Link> </li>
        </ul>

      </div>
    );
  }
}

export default Navigation;