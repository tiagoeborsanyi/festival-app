import React, { Component } from 'react';

class ReviewFestival extends Component {
    render() {
        return (
            <div>
                review
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

export default ReviewFestival;