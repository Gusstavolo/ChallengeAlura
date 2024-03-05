import React from 'react';
import d from './img/d.png'; // Tell webpack this JS file uses this image


function Dimg() {
  // Import result is the URL of your image
  return (
    <div className='dddDiv'>
        <img className='dentes' src={d} alt="d" />
       
        
    </div>
        


  );
}

export default Dimg;