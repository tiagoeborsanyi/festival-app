import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import FormFestival from '../../../components/FormFestival/FormFestival';

class EditEvent extends Component {

    changeFields = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.props.onChangeFestival(name, value);
    }

    festivalSubmit = (event) => {
        event.preventDefault();
        this.props.onNewFestival();
    }

    cancelFormFestival = (e) => {
        e.preventDefault();
        this.props.onFestivalFinish();
        this.props.cancelForm.push('/');
    }

    render () {
        return <FormFestival
                festivalChanged={this.changeFields}
                festivalSubmit={(e) => this.festivalSubmit(e)}
                objFestival={this.props.onObjFestival ? this.props.onObjFestival : ''}
                cancelFormFestival={this.cancelFormFestival} />
    }
}

const mapStateToProps = state => {
    return {
        onObjFestival: state.festival.objFestival
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeFestival: (name, value) => dispatch(actions.festivalStart(name, value)),
        onFestivalFinish: () => dispatch(actions.festivalFinish())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);