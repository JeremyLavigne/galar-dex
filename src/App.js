import pokedex from './assets/pokedex.json';

// https://www.serebii.net/pokedex-swsh/icon/${nationalID}.png

function App() {
  return (
    <div className="App">
      {
        pokedex.map((pokemon) => <li key={pokemon.galarId}>
          {pokemon.galarId} - {pokemon.nameFr} / {pokemon.nameEn} - <img alt="pkm_icn" src={`https://www.serebii.net/pokedex-swsh/icon/${pokemon.nationalId}.png`}/>
          </li>)
      }
    </div>
  );
}

export default App;
