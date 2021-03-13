import pokedex from './assets/pokedex.json';

function App() {
  return (
    <div className="App">
      {
        pokedex.map((pokemon) => <li key={pokemon.galarId}>{pokemon.nameFr}</li>)
      }
    </div>
  );
}

export default App;
