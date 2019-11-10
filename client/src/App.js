import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Toolbar from './components/Navigation/Toolbar';
import Dashboard from './containers/Dashboard/Dashboard';
import Description from './components/Description/Description';
import AddFestival from './components/AddFestival/AddFestival';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Toolbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/descricao/:id" component={Description} />
          <Route path="/add_festival" component={AddFestival} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
