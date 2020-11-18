import UserActionTypes from './user.types';

export const setData = userData => ({
    type: UserActionTypes.SET_DATA,
    payload: userData
});