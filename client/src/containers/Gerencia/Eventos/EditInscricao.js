import React, { Component } from 'react';

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

    forminscricaoSubmit = (event) => {
        event.preventDefault();
        const obj = {
            id: this.props.match.params.id,
            objInscricao: this.state.objInscricao
        }
        console.log(obj)
    }

    render() {
        return <FormInscricao 
                    objInscricao={this.state.objInscricao}
                    formInscricaoChanged={this.formInscricaoChanged}
                    forminscricaoSubmit={this.forminscricaoSubmit} />
    }
}

export default EditInscricao;