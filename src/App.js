import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
   <div>
     <Switch>
       <Route exact path="/" component={Home}></Route>
       
     </Switch>
   </div>
  );
}

export default App;
