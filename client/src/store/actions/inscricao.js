import axios from 'axios';
import * as actionTypes from './actionTypes';

export const inscricaoStart = () => {
    return {
        type: actionTypes.INSCRICAO_START,
        obj: {}
    }
}