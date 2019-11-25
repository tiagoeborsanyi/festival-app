import axios from 'axios';
import * as actionTypes from './actionTypes';

export const festivalStart = (name, value) => {
    return {
        type: actionTypes.FESTIVAL_START,
        name,
        value
    };
};

export const festivalSubmit = (obj) => {
    console.log(obj)
    // Incluir ações do axios para gravar no banco de dados
    // recebendo o status 200 de gravação então é exibida uma modal falando que foi enviado um email para o usuario e depois o 
    // usurio é redirecionado para a homePage
    // /api/evento
    return {
        type: actionTypes.FESTIVAL_SUBMIT
    }
}

export const festivalFinish = () => {
    return {
        type: actionTypes.FESTIVAL_FINISH
    };
};