import pokedex from './assets/pokedex.json';
import Line from './components/Line';
import './App.css';

function App() {
  return (
    <main>
      {
        pokedex.map((pok) => 
          <Line key={pok.galarId} pokemon={pok}/>
        )
      }
    </main>
  );
}

export default App;
