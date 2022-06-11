import React, { Fragment } from 'react';
//
import List from './components/list';

//import './App.css';

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a className="navbar-brand" href="/">Ghibli Studios</a>
      </nav>

      <main>
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
