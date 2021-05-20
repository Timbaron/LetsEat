import React, {useEffect,useState} from 'react';
import Recipe from './recipe'
import './App.css';


function App() {
  const APP_ID = 'dccd8b32';
  const APP_KEY = "b0ccd1347d986107178a1513b98783c3";

  const [recipies, setRecipies] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');

  useEffect( () => {
    getRecipies();
  }, [query])

  const getRecipies = async () => {
    const reaponse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await reaponse.json();
    setRecipies(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <div className="App_name">
        <h1>Welcome to Let's Cook Now</h1>
      </div>
      <form onSubmit={getSearch} action="" className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Enter name of food"/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    <div className="recipes">

    {recipies.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
    </div>
    </div>
  );
}

export default App;
