import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("ditto");
  const [pokemonData, setPokemonData] = useState(null);

  const selectPokemonCallback = (e) => {
    setSelectedPokemon(e.target.value);
  }

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const fetchSelectedPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonData(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }
  useEffect(fetchSelectedPokemon, []);

  console.log("We are rendering");

  return (
    <div className="App">
      <h1>Backend Testing 3</h1>
      <hr/>
      {/** Här ska vi ladda in vår data från backend */}
      <input value={selectedPokemon} onChange={selectPokemonCallback}></input>
      <button onClick={fetchSelectedPokemon}>Select Pokemon</button>
      <h2>{pokemonData?.name}</h2>
      <h3>Abilities</h3>
      <ul>
        {
          pokemonData?.abilities.map((abilityItem)=>{
            return (<li key={abilityItem.slot}>{abilityItem.ability.name}</li>);
          })
        }
      </ul>
    </div>
  );
}

export default App;