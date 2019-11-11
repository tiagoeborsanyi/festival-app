import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const auth = (email, pass) => dispatch => {
    console.log(email, pass);
}