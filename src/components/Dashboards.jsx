import React from "react";
import PokemonCards from "./PokemonCards";

const Dashboards = ({ selectedPokemon, removePokemon }) => {
  return (
    <Dashboardsdiv>
      {selectedPokemon.length === 0 ? (
        <p>.</p>
      ) : (
        <Dashboards>
          {PokemonLists.map((pokemon) => (
            <PokemonCards key={pokemon.id} pokemon={pokemon} />
          ))}
        </Dashboards>
      )}
    </Dashboardsdiv>
  );
};

export default Dashboards;
