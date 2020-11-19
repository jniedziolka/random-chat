import UserActionTypes from './user.types';

const INITIAL_STATE = {
    userData: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_DATA:
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;