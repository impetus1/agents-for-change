import React, { Component } from 'react';
import logo from './logo.svg';
import Bleh from './Containers/some-code'
import Frontpage from './Components/frontpage';
import Blah from './Components/newPath'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor() {
    super();}
  render() {
    return (
<Router>
  <div>
  <Route path="/" render={()=> (
      <Frontpage/>
    )} />
  <Route exact path="/" render={()=> (
      <Bleh/>
    )} />
    <Switch>
   <Route exact path="/Resources" render={()=> (
      <Blah/>
    )} />
    </Switch>
    </div>
</Router>
    );
  }
}

export default App;
