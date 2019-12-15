import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    objFestival: null,
    objInscricao: null
}

const festivalLoad = (state, action) => {
    return updateObject(state, {
        objFestival: action.objFestival
    })
}

const festivalUnmount = (state, action) => {
    return updateObject(state, {
        objFestival: null
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FESTIVAL_UNMOUNT: return festivalUnmount(state, action);
        case actionTypes.FESTIVAL_LOAD: return festivalLoad(state, action);
        default: return state;
    }
}

export default reducer;