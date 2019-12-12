import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, admin = false) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        admin: admin
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('admin');
    localStorage.removeItem('name');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = (expirationTime) => dispatch => {
    setTimeout(() => {
        dispatch(logout());
    }, expirationTime * 1000);
};

export const auth = (email, pass) => async dispatch => {
    dispatch(authStart());
    const authData = { email, password: pass};
    let url = `/api/users/login`;
    try {
        const response = await axios.post(url, authData);
        console.log(response)
        if (response) {
            const { token, expiresIn, localId, admin } = response.data;
            const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', localId);
            localStorage.setItem('admin', response.data.admin);
            localStorage.setItem('name', response.data.name);
            dispatch(authSuccess(token, localId, admin));
            dispatch(checkAuthTimeout(expiresIn));
        }
    } catch (error) {
        dispatch(authFail(error.response.data));
    }
    
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const authCheckState = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout());
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            const admin = localStorage.getItem('admin');
            dispatch(authSuccess(token, userId, admin));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
}