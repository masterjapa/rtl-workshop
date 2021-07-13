import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Results from './components/Results';
import Loader from './components/Loader';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="App">
      <SearchInput onAfterSearch={setPokemon} isFetchingPokemon={setIsSearching} />
      <Results pokemon={pokemon} isSearching={isSearching}>
        {isSearching && <Loader />}
      </Results>
    </div>
  );
}

export default App;
