import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      
      <ItemListContainer />
      
      {/* <MercadoLibre /> */}
    </div>
  );
}

export default App;