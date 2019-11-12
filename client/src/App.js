import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import './App.css';
import Toolbar from './components/Navigation/Toolbar';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Dashboard/Dashboard';
import Description from './components/Description/Description';
import EditFestival from './containers/Festival/EditFestival/EditFestival';
import Footer from './components/Footer/Footer';

class App extends Component {

  componentDidMount () {
    this.props.onTryOutSignup();
    // console.log(this.props.onTryOutSignup())
  }

  render() {
    return (
      <div className="container">
        <Toolbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Auth} />
            <Route path="/descricao/:id" component={Description} />
            <Route path="/add_festival" component={EditFestival} />
            <Route path="/edit_festival/:eventId" component={EditFestival} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryOutSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
