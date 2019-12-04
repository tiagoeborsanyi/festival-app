import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormInscricao from '../../../components/Gerencia/Inscricao/FormInscricao/FormInscricao';

class EditInscricao extends Component {
    state = {
        objInscricao: {
            title: '',
            subtitle: '',
            tipo: '',
            image: '',
            value: '',
            qtdTotal: 0,
            dateFinal: ''
        }
    }

    formInscricaoChanged = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let updateObj = { ...this.state.objInscricao };
        updateObj[name] = value;
        this.setState({ objInscricao: updateObj });
    }

    forminscricaoSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            id: this.props.match.params.id,
            obj: this.state.objInscricao
        }
        const res = await axios.post('/api/inscricao', obj, { headers: {"Authorization" : this.props.token}});
        console.log(res);
    }

    render() {
        return <FormInscricao 
                    objInscricao={this.state.objInscricao}
                    formInscricaoChanged={this.formInscricaoChanged}
                    forminscricaoSubmit={this.forminscricaoSubmit} />
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(EditInscricao);