import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import './App.css';
import Toolbar from './components/Navigation/Toolbar';
import MenuGerencia from './containers/Gerencia/MenuGerencia';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Dashboard from './containers/Dashboard/Dashboard';
import Description from './components/Description/Description';
import NewFestival from './containers/Festival/EditFestival/NewFestival';
import Footer from './components/Footer/Footer';

class App extends Component {

  componentDidMount () {
    this.props.onTryOutSignup();
    // console.log(this.props.onTryOutSignup())
  }

  render() {
    let routes = (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Auth} />
            <Route path="/descricao/:id" component={Description} />
            <Route path="/add_festival" component={NewFestival} />
            <Route path="/edit_festival/:eventId" component={NewFestival} />
            <Redirect to="/" />
          </Switch>
        </div>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/logout" component={Logout} />
            <Route path="/gerencia" component={MenuGerencia} />
            <Route path="/descricao/:id" component={Description} />
            <Route path="/add_festival" component={NewFestival} />
            <Route path="/edit_festival/:eventId" component={NewFestival} />
            <Redirect to="/" />
          </Switch>
        </div>
      )
    }
    return (
      <div className="container">
        <Toolbar authToken={this.props.isAuthenticated} />
          {routes}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryOutSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
