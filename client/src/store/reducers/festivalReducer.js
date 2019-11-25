import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    objFestival: {
        active: false,
        name: '',
        phone: '',
        mobile: '',
        nameCompany: '',
        state: '',
        city: '',
        email: '',
        EventDate: '',
        description: ''
    },
    recordStatus: 0
}

const festivalStart = (state, action) => {
        const updateFestival = { ...state.objFestival };
        updateFestival[action.name] = action.value;
    return updateObject(state, {
        objFestival: updateFestival
    })
}

const festivalSubmit = (state, action) => {
    return updateObject(state, {
        recordStatus: action.status
    })
}

const festivalFinish = (state, action) => {
    return updateObject(state, {
        objFestival: {...initialState.objFestival}
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FESTIVAL_START: return festivalStart(state, action);
        case actionTypes.FESTIVAL_SUBMIT: return festivalSubmit(state, action);
        case actionTypes.FESTIVAL_FINISH: return festivalFinish(state, action);
        default: return state;
    }
}

export default reducer;