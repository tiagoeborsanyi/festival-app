import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const auth = (email, pass) => async dispatch => {
    dispatch(authStart());
    const authData = { email, password: pass};
    let url = `/api/users/login`;
    const response = await axios.post(url, authData);
    console.log(response)
    if (response) {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        // tem que criar um local storage pra saber se o user é adim ou não
        //tem que mudar o model da collection pra incluir essa tag
        // localStorage.setItem('manager', response.data.manager); 
    }
}