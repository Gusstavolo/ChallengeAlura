import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div  className='main'>
      <header>
      </header>
      <section>
        <textarea typeof='text' itemID='criptografar-texarea' className='boxOne' placeholder="Digite seu texto..."></textarea>
        
        <textarea typeof='text' itemID='descriptografar-texarea' className='boxTwo' placeholder="Digite seu texto..."></textarea>


      </section>
      <footer></footer>
     
    </div>
  );
}

export default App;
