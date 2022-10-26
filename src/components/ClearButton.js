import React from 'react';
import '../stylessheets/ClearButton.css'

const ClearButton = (props) => (
  <div 
    className='clear-button'
    onClick={() => props.clickHandler(props.clearInput)}>
    {props.children}
  </div>
);

export default ClearButton;