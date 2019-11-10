import React, { Component } from 'react';

import Card from '../../components/Card/Card';

class Dashboard extends Component {
    state = {
        path: 'descricao',
        id: '1'
    }


    render() {
        return (
            <div>
                <Card descUrl={this.state.path} descId="1" />
                <Card descUrl={this.state.path} descId="2" />
                <Card descUrl={this.state.path} descId="3" />
            </div>
        );
    }
}

export default Dashboard;