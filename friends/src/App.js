import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';


import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* <PrivateRoute path="/protected" component={GasPrices} /> */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
  );
}

export default App;
