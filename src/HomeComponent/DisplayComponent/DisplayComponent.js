import React from 'react'
import get from 'lodash/get';
import './DisplayComponent.css';

function DisplayComponent(props) {
  const gifImg = get(props.displayGif, 'images.original.url', '');
  const title = get(props.title, 'images.title', '')
  return (
  <div>
    <img className={props.divClass} src={gifImg} alt=''/>
  </div>
  ) 
}

export default DisplayComponent;

