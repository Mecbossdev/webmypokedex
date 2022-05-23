import React, { useEffect, useState } from 'react';
import { Posts } from './Posts';


const App = () => {

   const[allPokemons, setAllPokemons] = useState([]);
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
   const [searchValue, setSearchValue] = useState('');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])  
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          
          
        </div>
          <button 
            className="load-more" 
            onClick={() => getAllPokemons()}>Load more
          </button>
      </div>
    </div>
  );

  return (
    <div className="search-container">
      {!!searchValue && (
        <h1>Search value: { searchValue }</h1> 
      )}

      <TextInput searchValue={ searchValue } handleChange={handleChange}/>
      </div>

        
      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}

      {filteredPosts.length === 0 && (
        <p>Não existem posts = </p>
      )}
    </div>
  )
}

export default App;
