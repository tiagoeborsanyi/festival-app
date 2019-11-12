import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    festival: null
}

const festivalStart = (state, action) => {
    return updateObject(state, {
        festival: action.festival
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FESTIVAL_START: return festivalStart(state, action);
        default: return state;
    }
}

export default reducer;