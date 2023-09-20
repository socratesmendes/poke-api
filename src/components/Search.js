import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

function Search({ onSearch }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleSearch = async () => {
    
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do Pokémon:', error);
    }

  };

  return (
    
    <div>

      <input
        type="text"
        placeholder="Digite o nome do Pokemon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

    </div>

  );

}

export default Search;
