import React from 'react';
import Card from '../../components/card/Card';
import Home from '../Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/animal/:id" component={Card} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
