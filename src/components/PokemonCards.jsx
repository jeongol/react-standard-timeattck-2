import React from "react";

const PokemonCards = ({ pokemon }) => {
  return (
    <Card>
      <div>{pokemon.korean_name}</div>
      <img src={pokemon.img_url} />
      <div>{pokemon.description}</div>
    </Card>
  );
};

export default PokemonCards;
