import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

import Login from '../../components/User/Login/Login';

class Auth extends Component {
    state = {
        email: '',
        pass: ''
    }

    submitAuth = (e) => {
        e.preventDefault();
        const { email, pass } = this.state;
        this.props.onAuth(email, pass);
    }

    render() {
        return (
            <div className="row">
                <div className="col s6">
                    <form onSubmit={this.submitAuth}>
                        <span>Email</span>
                        <input placeholder="email" type="email" onChange={event => this.setState({email: event.target.value})} />
                        <span>Senha</span>
                        <input placeholder="senha" type="password" onChange={event => this.setState({pass: event.target.value})} />
                        <button type="submit" className="light-blue btn-flat right white-text">
                            Avançar
                            <i className="material-icons right">done</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, pass) => dispatch(actions.auth(email, pass))
    }
}
export default connect(null, mapDispatchToProps)(Auth);