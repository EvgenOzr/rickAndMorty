import React from 'react';

import './error-indicator.css';
import icon from './morty.jpeg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className='error-indicator-img'>
        <img src={icon} alt="error icon"/>
      </div>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
