import React from 'react';
import './style.css'
import gif from '../../resources/images/kt_gif edit.gif'

const LandingImage = () => {
  return (
    <div className="img-container">
      <img className="landing-img" src={gif}/>
    </div>
  );
};

export default LandingImage;