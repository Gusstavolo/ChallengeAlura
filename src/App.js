import logo from './logo.svg';
import './App.css';
import './components/Anim.css'
import Dimg from './components/imgd';
import Fimg from './components/imgdFoot';
import Backg from './components/Background';



function App() {
  return (
    <div  className='main' >
      
      <header >
      </header>
      
      
      <section>
        <div className='boxOne'>
          <textarea typeof='text' itemID='criptografar-texarea' className='boxOneText' placeholder="Digite seu texto..."></textarea>

        </div>
              <div className='divButton'>
                <button className='buttonCod'></button>
                <button className='buttonDesCod'></button>
              </div>
          <div className='boxTwo'>

            <textarea typeof='text' itemID='descriptografar-texarea' className='boxTwoText' placeholder="Digite seu texto..."></textarea>

          </div>

        
      </section>
      
      <footer>
     
      
      </footer>
      <Fimg />
     <Dimg ></Dimg>
    </div>
  );
}

export default App;
