import React from 'react'
import button from '../../resources/icons/burgerButton.png'
import './style.css'

const BugerButton = (props) => {

  const handleClick = () => {
    props.toggle()
  }

  return (
    <div>
      <img className="buger-button" src={button} onClick={handleClick}/>
    </div>
  );
};

export default BugerButton;