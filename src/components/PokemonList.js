// this component will render the list of pokemon 
// it receives pokemon data as props and map over them
// to display each pokemon name and information

import React from 'react';
import PokemonCard from '../components/PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
