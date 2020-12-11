import React from 'react';
import './App.css';
import FavoritesMap from "./components/FavoritesMap";

function App() {
  return (
    <div className="App">
    <h1>Top 3 hot chocolate locations in Oslo</h1>
      <FavoritesMap />
    </div>
  );
}

export default App;