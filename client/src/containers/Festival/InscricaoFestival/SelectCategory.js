import React, { Component } from 'react';

class SelectCategory extends Component {
    render() {
        return(
            <div>
                Selecione a categoria
                <button className="btn btn-flat" onClick={this.props.categoriaContinuar}>Continuar</button>
            </div>
        )
    }
}

export default SelectCategory;