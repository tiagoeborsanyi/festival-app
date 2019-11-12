import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    objFestival: null
}

const festivalStart = (state, action) => {
    return updateObject(state, {
        objFestival: action.festival
    })
}

const festivalFinish = (state, action) => {
    return updateObject(state, {
        objFestival: null
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FESTIVAL_START: return festivalStart(state, action);
        case actionTypes.FESTIVAL_FINISH: return festivalFinish(state, action);
        default: return state;
    }
}

export default reducer;