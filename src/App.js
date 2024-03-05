import logo from './logo.svg';
import './App.css';
import Dimg from './components/imgd';
import Fimg from './components/imgdFoot';
import Backg from './components/Background';



function App() {
  return (
    <div  className='main' >
      
      <header >
          
        
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
     
      
      </footer>
      <Fimg />
     <Dimg ></Dimg>
    </div>
  );
}

export default App;
