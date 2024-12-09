import { useContext } from "react";
import { KosarContext } from '../context/KosarContext';
import { ApiContext } from "../context/ApiContext";
import KosarCanvas from '../components/kosar/KosarCanvas';
import Vasarloter from "../components/Vasarloter";



function App() {

  const { termekLista } = useContext(ApiContext);
  const {kosarLista} = useContext(KosarContext);

  return (

      <main className='pt-5'>
        <header className='bg-primary text-white py-3'>
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
