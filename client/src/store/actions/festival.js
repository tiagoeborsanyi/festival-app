// import axios from 'axios';
import * as actionTypes from './actionTypes';

export const festivalStart = (name, value) => {
    return {
        type: actionTypes.FESTIVAL_START,
        name,
        value
    };
};

export const festivalSubmit = () => {
    return {
        type: actionTypes.FESTIVAL_SUBMIT
    }
}

export const festivalFinish = () => {
    return {
        type: actionTypes.FESTIVAL_FINISH
    };
};