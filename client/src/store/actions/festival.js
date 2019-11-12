// import axios from 'axios';
import * as actionTypes from './actionTypes';

export const festivalStart = (objFestival) => {
    return {
        type: actionTypes.FESTIVAL_START,
        festival: objFestival
    };
};

export const festivalFinish = () => {
    return {
        type: actionTypes.FESTIVAL_FINISH
    };
};