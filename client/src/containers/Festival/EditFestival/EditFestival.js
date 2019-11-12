import React, { Component } from 'react';

import FormFestival from '../../../components/FormFestival/FormFestival';

class EditEvent extends Component {
    state = {
        festival: {
            active: false,
            name: '',
            phone: '',
            mobile: '',
            nameCompany: '',
            state: '',
            city: '',
            email: '',
            EventDate: '',
            description: ''
        }
    }

    changeFields = event => {
        event.preventDefault();
        const { value, name } = event.target;
        const updateFestival = { ...this.state.festival };
        updateFestival[name] = value;
        this.setState({festival: updateFestival});
    }

    festivalSubmit = event => {
        event.preventDefault();
        console.log(this.state.festival)
    }

    render () {
        return <FormFestival
                festivalChanged={this.changeFields}
                festivalSubmit={this.festivalSubmit} />
    }
}

export default EditEvent;