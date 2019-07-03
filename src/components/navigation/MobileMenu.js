import React from 'react';

const MobileMenu = (props) => {

  const handleClick = () => {
    props.toggle()
  }

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        {props.content}
      </div>
    </div>
  );
};

export default MobileMenu;