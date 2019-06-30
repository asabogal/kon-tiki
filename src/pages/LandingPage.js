import React, { Component } from 'react';
import Navigation from '../components/landing/Navigation'
import LandingImage from '../components/landing/LandingImage'
import './style.css'

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-flex">
          <Navigation/>
          <LandingImage/>
        </div>
      </div>
    );
  }
}

export default LandingPage;