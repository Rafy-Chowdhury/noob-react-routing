import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import ClubDetails from './Components/ClubDetails/ClubDetails';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
           <Router>
      <div>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/club/:clubid">
           <ClubDetails></ClubDetails>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
