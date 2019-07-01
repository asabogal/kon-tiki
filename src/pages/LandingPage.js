import React, { Component } from 'react';
import Navigation from '../components/landing/Navigation'
import LandingImage from '../components/landing/LandingImage'
import Header from '../components/landing/Header'
import './style.css'

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header/> 
        <div className="landing-grid">
          <Navigation/>
          <LandingImage/>
        </div>
      </div>
    );
  }
}

export default LandingPage;