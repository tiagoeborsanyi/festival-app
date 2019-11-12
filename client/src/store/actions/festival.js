import axios from 'axios';
import * as actionTypes from './actionTypes';

export const festivalStart = (objFestival) => {
    console.log(objFestival)
    return {
        type: actionTypes.FESTIVAL_START,
        festival: objFestival
    };
};