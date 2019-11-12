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
    }
}

const festivalStart = (state, action) => {
        const updateFestival = { ...state.objFestival };
        updateFestival[action.name] = action.value;
    return updateObject(state, {
        objFestival: updateFestival
    })
}

const festivalSubmit = (state, action) => {
    console.log(state.objFestival)
    return updateObject(state, {
        
    })
}

const festivalFinish = (state, action) => {
    return updateObject(state, {
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
        }
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