import React from 'react'
import get from 'lodash/get';
import './DisplayComponent.css';

function DisplayComponent(props) {
  // console.log('props', props)
  const gifImg = get(props.displayGif, 'images.original.url', '');
  // let gifImg = ""
  // if(props.displayGif.images) {
  //    gifImg = props.displayGif.images.original.url;
  // }
  return (
  <div>
    <img className={props.divClass} src={gifImg} alt=''/>
  </div>
  ) 
}

export default DisplayComponent;

// downsized_medium:
// downsized_small:
