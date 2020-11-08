import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Board from './Components/Board.js';
import Home from './Components/Home.js';
import PickSide from './Components/PickSide.js';
import store from './Components/Store/Store.js';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/board">
            <Board />
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
