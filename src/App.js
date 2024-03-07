import logo from './logo.svg';
import './App.css';
import './components/Anim.css'

import Dimg from './components/imgd';
import Fimg from './components/imgdFoot';


import React from 'react';
import {clickButtonCripto, clickButtonDescripto } from './components/criptoconfig.jsx';

function App() {
  return (
    <div  className='main' >
      
      <header >
      </header>
      
      
      <section>
        <div className='boxOne'>
          <textarea typeof='text' id='criptografar-texarea' className='boxOneText' placeholder="Digite seu texto..."></textarea>

        </div>
              <div className='divButton'>
                
              <button onClick={clickButtonCripto} className='buttonCod'></button>

              <button onClick={clickButtonDescripto} className='buttonDesCod'></button>
              <div className='stoneInfo'></div>

              </div>
          <div className='boxTwo'>

            <textarea typeof='text' id='descriptografar-texarea' className='boxTwoText' placeholder="Digite seu texto..." />
    
          </div>
          <div className='stoneCopy'></div>
        
      </section>
      
      <footer>
     
      
      </footer>            
      

      <Fimg />
     <Dimg ></Dimg>
    </div>
  );
}

export default App;
