// this class will be used to show an input field
// accompanied with a button to filter a pokemon by name

import React, { useState } from 'react';

const PokemonFilter = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (pokemon_name) => {
    const value = pokemon_name.target.value;
    setFilterValue(value);
    onFilterChange(value);
  };

  return (
    <div className="pokemon-filter">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={filterValue}
        onChange={handleInputChange}
      />
      <button onClick={() => onFilterChange('')}>Clear</button>
    </div>
  );
};

export default PokemonFilter;
