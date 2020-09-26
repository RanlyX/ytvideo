import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Index, Favorite, Player, M3U8 } from './pages/pages.js';
import { Navbar } from './pages/navbar';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container">
        {/* The corresponding component will show here if the current URL matches the path */}
        <Navbar />
        <Route path="/" exact component={Index} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/player/youtube/" component={Player} />
        <Route path="/player/m3u8" component={M3U8} />
    </div>
  );
}

export default App;
