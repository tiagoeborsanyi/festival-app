import React, { Component } from 'react';

import FormInscricao from '../../../components/Gerencia/Inscricao/FormInscricao/FormInscricao';

class EditInscricao extends Component {
    state = {
        objInscricao: {}
    }

    render() {
        return <FormInscricao objInscricao={this.state.objInscricao} />
    }
}

export default EditInscricao;