import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class ReviewFestival extends Component {

    recordFestival = () => {
        this.props.onFestivalSubmit(this.props.onObjFestival);
    }

    render() {
        let objFestival = null;
        if (this.props.onObjFestival) {
            objFestival = (
                <h6>nome: {this.props.onObjFestival.name}</h6>
            )
        }
        return (
            <div>
                <div>
                    <div className="row festival_item_input">
                        <span>Nome</span>
                        {this.props.onObjFestival.name}
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="festival_item_input">
                                <span>Telefone</span>
                                {this.props.onObjFestival.phone}
                            </div>
                        </div>
                        <div className="col s6">
                        <div className="festival_item_input">
                            <span>Celular</span>
                            {this.props.onObjFestival.mobile}
                        </div>
                        </div>
                    </div>
                    <div className="festival_item_input">
                        <span>Nome da Empresa</span>
                        {this.props.onObjFestival.nameCompany}
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="festival_item_input">
                                <span>Cidade</span>
                                {this.props.onObjFestival.city}
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="festival_item_input">
                                <span>Estado</span>
                                {this.props.onObjFestival.state}
                            </div>
                        </div>
                    </div>
                    <div className="festival_item_input">
                        <span>Email</span>
                        {this.props.onObjFestival.email}
                    </div>
                    <div className="festival_item_input">
                        <span>Data</span>
                        {this.props.onObjFestival.EventDate}
                    </div>
                    <div className="festival_item_input">
                        <span>Descrição</span>
                        {this.props.onObjFestival.description}
                    </div>
                </div>
                <button className="yellow darken-3 white-text btn-flat" onClick={this.props.onCancel}>
                    Back
                </button>
                <button className="green white-text btn-flat right" onClick={this.recordFestival}>
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        onObjFestival: state.festival.objFestival
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFestivalSubmit: (value) => dispatch(actions.festivalSubmit(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFestival);