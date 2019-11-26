import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MenuLinkGerencia from '../../components/Gerencia/MenuLinkGerencia';
import ListEvents from '../../components/Gerencia/Evento/ListEvents';
import ListUsers from '../../components/Gerencia/Users/ListUsers';


class MenuGerencia extends Component {
    render () {
        return (
            <MenuLinkGerencia>
                <Switch>
                    <Route path="/gerencia/list-events" component={ListEvents} />
                    <Route path="/gerencia/list-users" component={ListUsers} />
                    <Redirect to="/gerencia/list-events" />
                </Switch>
            </MenuLinkGerencia>
        )
    }
}

export default MenuGerencia;