import React, { Component } from 'react';

import Register from '../../components/User/Register/Register';

class AuthRegister extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: ''
    }

    changed = (e) => {
        console.log(e.target.name)
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submit = e => {
        e.preventDefault();
    }

    render() {
        return <Register changed={this.changed} submit={this.submit} />
    }
}

export default AuthRegister;