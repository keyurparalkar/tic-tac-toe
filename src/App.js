import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { Game } from './Components/Game.js';
import Home from './Components/Home.js';
import { PickSide } from './Components/PickSide.js';
import store from './Components/Store/Store.js';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/pickSide">Pick your side</Link>
        </li>

        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>

      <Switch>
        <Provider store={store}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/game">
            <Game />
          </Route>

          <Route exact path="/pickSide">
            <PickSide />
          </Route>
        </Provider>

      </Switch>

    </Router>

  );
}

export default App;
