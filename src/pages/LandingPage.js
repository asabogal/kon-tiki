import React, { Component } from 'react';
import Navigation from '../components/x-landing/Navigation'
import LandingImage from '../components/x-landing/LandingImage'
import Header from '../components/x-landing/Header'
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