import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Infos from './components/Infos';
import pokemonLogo from './img/pokemon-logo.png';

function App() {

  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = (data) => {
    setPokemonData(data);
  };

  return (

    <div className="App">

      <img src={pokemonLogo} alt="Pokemon Logo" width={500}/>

      <h3>Consulte seus pokemons!</h3>

      <Search onSearch={handleSearch} />

      <div className="Infos">
        
        <Infos pokemon={pokemonData} />

      </div>

    </div>

  );

}

export default App;
