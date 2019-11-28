import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ListEvents from '../../../components/Gerencia/Evento/ListEvents';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Eventos extends Component {
    state = {
        ev: [],
        status: false,
        load: false
    }

    async componentDidMount() {
        const res = await axios.get('/api/evento/all');
        this.setState({ ev: res.data });
    }

    changeCheck = async (e) => {
        const index = this.state.ev.findIndex(x => x._id === e.target.name)
        const obj = {
            id: e.target.name,
            active: !this.state.ev[index].active
        }
        const res = await axios.post('/api/evento/publish', obj, { headers: {"Authorization" : this.props.token}});
        // console.log(res);
        if (res.status === 200) {
            const updateObj = [...this.state.ev]
            updateObj[index]['active'] = obj.active;
            this.setState({ ev: updateObj})
        }
    }

    render() {
        // esse spinner eu tenho que fazer uma troca do checked...
        // quando o usuario clica entao é colocado um spinner 
        // quando o servidor retorna 200, entao o checked é mostrado novamente contendo o novo valor
        // se houver algum erro então é mostrado uma modal pro usuario dizendo que houve um erro, 
        // entao o checked volta ao estado de inicio
        let spinner = null;
        if (this.state.load) {
            spinner = <Spinner />
        }
        return (
            <div>
                <ListEvents dados={this.state.ev} changeCheck={this.changeCheck} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Eventos);