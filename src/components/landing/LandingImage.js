import React from 'react';
import gif from '../../resources/images/kt_gif.gif'

const LandingImage = () => {
  return (
    <div>
      <img className="landing-img" src={gif}/>
    </div>
  );
};

export default LandingImage;