import axios from 'axios';
import * as actionTypes from './actionTypes';

export const inscricaoStart = () => {
    return {
        type: actionTypes.INSCRICAO_START
    }
}

export const festivalLoad = (id) => async dispatch => {
    try {
        const response = await axios.get(`/api/evento/${id}`);
        dispatch({ type: actionTypes.FESTIVAL_LOAD, objFestival: response.data });
    } catch (error) {
        dispatch({ type: actionTypes.FESTIVAL_LOAD, status: error.response });
    }
}

export const festivalUnmount = () => {
    return {
        type: actionTypes.FESTIVAL_UNMOUNT
    };
};

export const inscricaoUnmount = () => {
    return {
        type: actionTypes.INSCRICAO_UNMOUNT
    }
}