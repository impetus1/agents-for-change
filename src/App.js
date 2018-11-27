import React, { Component } from 'react';
import Bleh from './Containers/some-code'
import Frontpage from './Components/frontpage';
import Blah from './Components/newPath.jsx'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
class App extends Component {
  constructor() {
  super();
}
  render() {
      /*this code tries to merge all other components for rendering different routes
      (that require different templates) */
    return (
<Router>
  <div>
  <Route path="/" render={()=> (
      <Frontpage/>
    )} />
    <Route path="/" render={()=> (
      <Bleh/>
    )} />
    <Switch>
  <Route exact path="/Resources" render={() => (
      <Blah />
    )} />
    </Switch>
    </div>
</Router>
    );
  }
}
export default App;