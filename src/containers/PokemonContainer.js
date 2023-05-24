// This container will be used to fetch data,
// manage state and logic related to a particular section

import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import PokemonFilter from '../components/PokemonFilter';
import TeamBuilderList from '../components/TeamBuilderList';

const PokemonContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [teamBuilder, setTeamBuilder] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=905');
      const data = await response.json();
      const pokemonsWithStats = await Promise.all(
        data.results.map(async (pokemon) => {
          const response1 = await fetch(pokemon.url);
          const pokemonData = await response1.json();
          const speciesResponse = await fetch(pokemonData.species.url);
          const speciesData = await speciesResponse.json();
          const pokedexEntry = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === 'en'
          ).flavor_text;
          return {
            ...pokemonData,
            pokedexEntry,
          };
        })
      );
      setPokemonData(pokemonsWithStats);
      setFilteredData(pokemonsWithStats);
    };
    fetchPokemonData();
  }, []);

  const handleFilterChange = (value) => {
    if (value === '') {
      setFilteredData(pokemonData);
    } else {
      const filtered = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const addToTeamBuilder = (pokemon) => {
    if (teamBuilder.length < 6) {
      setTeamBuilder((list1) => list1.concat(pokemon));
    }
  };
  
  const removePokemonFromTeam = (pokemon) => {
    setTeamBuilder((list2) =>
      list2.filter((pokemon1) => pokemon1.id !== pokemon.id)
    );
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <h2>(Almost) All Pokémon list</h2>
      <div className="pokemon-container">
        <div className="pokemon-list">
          <PokemonFilter onFilterChange={handleFilterChange} />
          {filteredData.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              addToTeamBuilder={addToTeamBuilder}
            />
          ))}
        </div>
        <TeamBuilderList teamBuilder={teamBuilder} removePokemon={removePokemonFromTeam} />
      </div>
    </div>
  );
};

export default PokemonContainer;