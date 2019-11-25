import axios from 'axios';
import * as actionTypes from './actionTypes';

export const festivalStart = (name, value) => {
    return {
        type: actionTypes.FESTIVAL_START,
        name,
        value
    };
};

export const festivalSubmit = (obj) => async dispatch => {
    // Incluir ações do axios para gravar no banco de dados
    // recebendo o status 200 de gravação então é exibida uma modal falando que foi enviado um email para o usuario e depois o 
    // usurio é redirecionado para a homePage
    // /api/evento
    try {
        const response = await axios.post('/api/evento', obj);
        console.log('response', response);
        dispatch({ type: actionTypes.FESTIVAL_SUBMIT, status: response.status })
    } catch (erro) {
        console.log(erro.response)
        dispatch({ type: actionTypes.FESTIVAL_SUBMIT, status: erro.response.status })
    }
}

export const festivalFinish = () => {
    return {
        type: actionTypes.FESTIVAL_FINISH
    };
};