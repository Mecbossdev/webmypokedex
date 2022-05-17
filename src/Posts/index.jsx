import React from 'react';

import { PokemonThumb } from '../PokemonThumb';

export const Posts = ({ allPokemons }) => {
  <div className="all-container">
    {allPokemons.map((pokemonStats, index) =>
      <PokemonThumb
        key={index}
        id={pokemonStats.id}
        image={pokemonStats.sprites.other.dream_world.front_default}
        name={pokemonStats.name}
        type={pokemonStats.types[0].type.name}
      />)}

  </div>
}

