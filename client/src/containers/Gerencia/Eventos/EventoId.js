import React, { Component } from 'react';

class EventoId extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h3>EVENTO ID: {this.props.match.params.id}</h3>
            </div>
        )
    }
}

export default EventoId;