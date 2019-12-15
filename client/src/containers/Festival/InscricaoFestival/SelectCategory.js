import React, { Component } from 'react';

import ViewInscricao from '../../../components/Gerencia/Inscricao/ViewInscricao/ViewInscricao';
import Spinner from '../../../components/UI/Spinner/Spinner';

class SelectCategory extends Component {
    render() {
        console.log(this.props.obj)
        let spinner = <Spinner />
        if (this.props.obj) {
            const insc = this.props.obj.inscricoes.map(obj => (
                <ViewInscricao key={obj._id} objInscricao={obj} continuar={this.props.categoriaContinuar} />
            ))
            spinner = insc
        }
        return(
            <div>
                {spinner}
            </div>
        )
    }
}

export default SelectCategory;