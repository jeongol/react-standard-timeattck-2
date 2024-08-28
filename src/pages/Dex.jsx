import React from "react";
import Dashboards from "../components/Dashboards";
import PokemonLists from "../components/PokemonLists";
import MOCK_DATA from "../moke";

const Dex = () => {
  console.log();
  return (
    <div>
      <Dashboards
        selectedPokmon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonLists PokemonLists={MOCK_DATA} onAddPokemon={onAddPokemon} />
    </div>
  );
};

export default Dex;
