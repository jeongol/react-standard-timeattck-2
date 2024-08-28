import React from "react";
import PokemonCards from "./PokemonCards";

const PokemonLists = ({ PokemonLists }) => {
  
  return (
    <List>
      {PokemonLists.map((pokemon) => (
        <PokemonCards key={pokemon.id} pokemon={pokemon} />
      ))}
    </List>
  );
};

export default PokemonLists;
