import React, { Component } from 'react';
import axios from 'axios';

import Description from '../../components/Description/Description';
import Spinner from '../../components/UI/Spinner/Spinner';

class Descricao extends Component {
    state = {
        evento: null
    }

    async componentDidMount() {
        const obj = await axios.get(`/api/evento/${this.props.match.params.id}`);
        console.log(obj)
        this.setState({evento: obj.data});
    }

    render() {
        let spinner = <Spinner />
        if (this.state.evento) {
            spinner = <Description evento={this.state.evento} />
        }
        return (
            <div>
                {spinner}
            </div>
        )
    }
}

export default Descricao;