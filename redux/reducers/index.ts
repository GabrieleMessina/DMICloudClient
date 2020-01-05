import { combineReducers } from 'redux';


import auth from './authReducer';

export interface action {
    type: string,
    payload: object
}

export default combineReducers({
    auth,
});
