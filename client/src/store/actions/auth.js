import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, manager = false) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        manager: manager
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
    // tem que remover a tag de manager
    // localStorage.removeItem('manager');
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
            const { token, expiresIn, localId } = response.data;
            const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', localId);
            // tem que criar um local storage pra saber se o user é adim ou não
            //tem que mudar o model da collection pra incluir essa tag
            // localStorage.setItem('manager', response.data.manager);
            dispatch(authSuccess(token, localId));
            dispatch(checkAuthTimeout(expiresIn));
        }
    } catch (error) {
        dispatch(authFail(error.response.data));
        console.log(error.response)
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
            const manager = localStorage.getItem('manager');
            dispatch(authSuccess(token, userId, manager));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
}