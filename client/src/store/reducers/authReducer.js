import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return;
        default:
            return state;
    }
}

export default reducer;