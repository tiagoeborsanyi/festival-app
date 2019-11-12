import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFestival extends Component {
    render() {
        let objFestival = null;
        console.log(this.props.onObjFestival)
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
                <button className="green white-text btn-flat right">
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

export default connect(mapStateToProps)(ReviewFestival);