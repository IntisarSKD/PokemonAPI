// Aim of this class is to represent a single pokemon card that
// receives the necessary data for a pokemon as props
// and will render the card with attributes like stats, weight etc.

// import React from 'react';

// const PokemonCard = ({ pokemon }) => {
//   const { name, weight, sprites, abilities, stats } = pokemon;

//   return (
//     <div className="pokemon-card">
//       <h2>{name}</h2>
//       <img src={sprites.front_default} alt={name} />
//       <p>Weight: {weight}</p>
//       <p>Abilities:</p>
//       <ul>
//         {abilities.map((ability) => (
//           <li key={ability.ability.name}>{ability.ability.name}</li>
//         ))}
//       </ul>
//       <p>Stats:</p>
//       <ul>
//         {stats.map((stat) => (
//           <li key={stat.stat.name}>
//             {stat.stat.name}: {stat.base_stat}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PokemonCard;

// import React from 'react';

// const PokemonCard = ({ pokemon }) => {
//   return (
//     <div className="pokemon-card">
//       <h2>{pokemon.name}</h2>
//       <p>Weight: {pokemon.weight}</p>
//       <p>Stats:</p>
//       <ul>
//         {pokemon.stats.map((stat) => (
//           <li key={stat.name}>
//             {stat.name}: {stat.value}
//           </li>
//         ))}
//       </ul>
//       <p>Pokedex Entry: {pokemon.pokedexEntry}</p>
//     </div>
//   );
// };

// export default PokemonCard;

// import React from 'react';

// const PokemonCard = ({ pokemon }) => {
//   const { name, sprites, stats, pokedexEntry, types } = pokemon;

//   return (
//     <div className="pokemon-card"> 
//       <h2>{name}</h2>
//       <img src={sprites.front_default} alt={name} />
//       <p>Weight: {pokemon.weight}</p>
//       <p>Type: {types.map((type) => type.type.name).join(', ')}</p>
//       <p>Stats:</p>
//       <ul>
//         {stats.map((stat) => (
//           <li key={stat.stat.name}>
//             {stat.stat.name}: {stat.base_stat}
//           </li>
//         ))}
//       </ul>
//       <p>Pokedex Entry: {pokedexEntry}</p>
//     </div>
//   );
// };

// export default PokemonCard;

import React from 'react';

const PokemonCard = ({ pokemon, addToTeamBuilder }) => {
  const { name, sprites, stats, pokedexEntry, types } = pokemon;

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {types.map((type) => type.type.name).join(', ')}</p>
      <p>Stats:</p>
      <ul>
        {stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <p>Pokédex Entry: {pokedexEntry}</p>
      <button onClick={() => addToTeamBuilder(pokemon)}>Add to Team</button>
    </div>
  );
};

export default PokemonCard;


