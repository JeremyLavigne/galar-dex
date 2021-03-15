import { useState } from 'react';

import Line from './components/Line';
import MoreDetails from './components/MoreDetails';

import pokedex from './assets/pokedex.json';

// -----------------------------------------------------------------
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activePokemon, setActivePokemon] = useState({});

  return (
    <main>
      {
        pokedex.map((pok) => 
          <Line 
            key={pok.galarId} 
            pokemon={pok} 
            setModalIsOpen={setModalIsOpen}
            setActivePokemon={setActivePokemon}
          />
        )
      }
      {
        modalIsOpen && 
          <MoreDetails 
            pokemon={activePokemon}
            setModalIsOpen={setModalIsOpen}
            setActivePokemon={setActivePokemon}
          />
      }
    </main>
  );
}

export default App;
