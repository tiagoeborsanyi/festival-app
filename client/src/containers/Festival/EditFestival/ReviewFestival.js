import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class ReviewFestival extends Component {

    recordFestival = () => {
        this.props.onFestivalSubmit();
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
                review
                <div>
                    {objFestival}
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
        onFestivalSubmit: () => dispatch(actions.festivalSubmit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFestival);