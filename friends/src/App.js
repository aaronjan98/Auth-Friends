import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';


import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList} />
          <PrivateRoute path="/addfriends" component={AddFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
  );
}

export default App;
