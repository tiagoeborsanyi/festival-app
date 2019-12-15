import React, { Component } from 'react';

import ViewInscricao from '../../../components/Gerencia/Inscricao/ViewInscricao/ViewInscricao';
import Spinner from '../../../components/UI/Spinner/Spinner';

class SelectCategory extends Component {
    render() {
        console.log(this.props.obj)
        let spinner = <Spinner />
        if (this.props.obj) {
            const insc = this.props.obj.inscricoes.map(obj => (
                <ViewInscricao key={obj._id} objInscricao={obj} />
            ))
            spinner = insc
        }
        return(
            <div>
                {spinner}
                <button className="btn btn-flat" onClick={this.props.categoriaContinuar}>Continuar</button>
            </div>
        )
    }
}

export default SelectCategory;