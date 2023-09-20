import React from 'react';
import './Infos.css';

function Infos({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  return (

    <div className="Infos">
      
      <h2>{pokemon.name}</h2>
      
      <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
      <p>Tipo: {pokemon.types[0].type.name}</p>
      <p>Peso: {pokemon.weight /10} kg</p>
      <p>Altura: {pokemon.height /10} m</p>

    </div>

  );

}

export default Infos;
