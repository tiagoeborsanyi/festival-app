import React, { Component } from 'react';
import axios from 'axios';

import Card from '../../components/Card/Card';

class Dashboard extends Component {
    state = {
        eventos: [],
        path: 'descricao',
        id: '1'
    }

    async componentDidMount() {
        const res = await axios.get('/api/evento/all');
        let temp = []
        await res.data.filter(x => {
            if (x.active === true) {
                temp.push(x)
            }
        });
        console.log(temp)
        this.setState({ eventos: temp });
        // console.log(res.data)
    }


    render() {
        const card = this.state.eventos.map(obj => (
            <Card key={obj._id} descUrl={this.state.path} obj={obj} />
        ))
        return (
            <div>
                {card}
            </div>
        );
    }
}

export default Dashboard;