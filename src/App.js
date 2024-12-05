import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import Vasarloter from './components/Vasarloter';
import { ApiContext } from './context/ApiContext';
import { KosarContext } from './context/KosarContext';
import KosarCanvas from './components/kosar/KosarCanvas';

function App() {

  const { termekLista } = useContext(ApiContext);
  const {kosarLista} = useContext(KosarContext);

  return (

      <main className='pt-5'>
        <header className='bg-primary text-white py-3 fixed-top'>
          <KosarCanvas kosarLista={kosarLista}/>
          <h1 className='text-center'>Fakestore Store 🐱‍👤</h1>
        </header>
        <article>
            <Vasarloter termekLista={termekLista}/>
        </article>
        <footer>

        </footer>
      </main>
  );
}

export default App;
