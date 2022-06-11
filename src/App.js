import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css'; // Estilos
//
import List from './components/list';

//import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a className="navbar-brand" href="/">Ghibli Studios</a>
      </nav>

      <List />
    </>
  );
}

export default App;
