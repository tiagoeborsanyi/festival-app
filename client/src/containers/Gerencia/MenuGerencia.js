import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MenuLinkGerencia from '../../components/Gerencia/MenuLinkGerencia';
import ListEvents from './Eventos/Eventos';
import EventoId from './Eventos/EventoId';
import EditFestival from '../Festival/EditFestival/EditFestival';
import ListUsers from '../../components/Gerencia/Users/ListUsers';


class MenuGerencia extends Component {
    render () {
        return (
            <MenuLinkGerencia>
                <Switch>
                    <Route path="/gerencia/list-events" component={ListEvents} />
                    <Route exact path="/gerencia/evento/:id" component={EventoId} />
                    <Route path="/gerencia/edit-festival" component={EditFestival} />
                    <Route path="/gerencia/list-users" component={ListUsers} />
                    <Redirect to="/gerencia/list-events" />
                </Switch>
            </MenuLinkGerencia>
        )
    }
}

export default MenuGerencia;