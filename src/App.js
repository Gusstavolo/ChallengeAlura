import logo from './logo.svg';
import './App.css';
import Dimg from './components/imgd';
import backgroundImage from './components/img/d.png';
import eye from './components/img/eye.gif';



function App() {
  return (
    <div  className='main'>
      <header>
          
          <div  className='dTest' style={{ backgroundImage: `url(${backgroundImage})` }}>
          </div>
          <div  className='eyeFooter' style={{ backgroundImage: `url(${eye})` }}>
          </div>
    
        
      </header>
      <section>
        <textarea typeof='text' itemID='criptografar-texarea' className='boxOne' placeholder="Digite seu texto..."></textarea>
        <div className='divButton'>
          <button className='buttonCod'></button>
          <button className='buttonDesCod'></button>
        </div>
        
        <textarea typeof='text' itemID='descriptografar-texarea' className='boxTwo' placeholder="Digite seu texto..."></textarea>


      </section>
      <footer>
      <div  className='dTestFooter' style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>

      </footer>
     
    </div>
  );
}

export default App;
