import React from 'react';
import './App.css';

function App() {
  const APP_ID = 'dccd8b32';
  const APP_KEY = "b0ccd1347d986107178a1513b98783c3";

  const ExampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
