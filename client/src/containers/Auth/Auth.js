import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

import Login from '../../components/User/Login/Login';

class Auth extends Component {
    state = {
        email: '',
        pass: ''
    }

    change = e => {
        const { name, value } = e.target;
        this.setState({[name]: value})
    }

    submitAuth = (e) => {
        e.preventDefault();
        const { email, pass } = this.state;
        this.props.onAuth(email, pass);
    }

    render() {
        return (
            <Login
                submit={this.submitAuth}
                changed={this.change} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, pass) => dispatch(actions.auth(email, pass))
    }
}
export default connect(null, mapDispatchToProps)(Auth);