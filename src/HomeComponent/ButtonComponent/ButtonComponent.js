import React from 'react';
import './ButtonComponent.css';

function ButtonComponent(props) {
    return (
      <div>
        <button className='first-button' onClick={props.handleClick}>Click here for a new gif</button>
      </div>
    )
  }

export default ButtonComponent;