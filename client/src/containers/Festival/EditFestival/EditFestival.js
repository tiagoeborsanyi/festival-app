import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

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

    festivalSubmit = (event) => {
        event.preventDefault();
        this.props.onFestival(this.state.festival);
        this.props.onFestivalSubmit();
    }

    render () {
        return <FormFestival
                festivalChanged={this.changeFields}
                festivalSubmit={(e) => this.festivalSubmit(e)} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFestival: (objFestival) => dispatch(actions.festivalStart(objFestival))
    }
}

export default connect(null, mapDispatchToProps)(EditEvent);