import React from 'react';

const TeamBuilderList = ({ teamBuilder, removePokemon }) => {
  return (
    <div className="team-builder-list">
      <h2>Pokémon Team Builder</h2>
      <ul>
        {teamBuilder.map((pokemon) => (
          <li key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
            <p>Stats:</p>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <p>Pokédex Entry: {pokemon.pokedexEntry}</p>
            <button onClick={() => removePokemon(pokemon)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamBuilderList;






