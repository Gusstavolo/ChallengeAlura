
import './App.css';
import './components/Anim.css'

import Dimg from './components/imgd';
import Fimg from './components/imgdFoot';


import React from 'react';
import {clickButtonCripto, clickButtonDescripto, buttonCopy } from './components/criptoconfig.jsx';
import { clickInfo, clickCloseInfo } from './components/Animations.jsx';
function App() {
  return (
    <div  className='main' >
      
      <header ></header>
      
      
      <section>
        <div className='boxOne'>
          <textarea typeof='text' id='criptografar-texarea' className='boxOneText' placeholder="Digite seu texto..."></textarea>

        </div>
              <div className='divButton'>
                
              <button onClick={clickButtonCripto} className='buttonCod'></button>
              <button onClick={clickButtonDescripto} className='buttonDesCod'></button>
              <button onClick={clickInfo} className='stoneInfo' />

              </div>
          <div className='boxTwo'>

            <textarea typeof='text' id='descriptografar-texarea' className='boxTwoText' placeholder="Digite seu texto..." />
    
          </div>
          <button onClick={buttonCopy} className='stoneCopy' />
        
      </section>
      
      <footer> </footer>            
      

      <Fimg />
     <Dimg />
     <div onClick={clickCloseInfo} id='overlayInfo' className='overlay'></div>
    </div>
  );
}

export default App;
