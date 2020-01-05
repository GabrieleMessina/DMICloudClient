import {action} from "./index"

interface authState {
    token: string | undefined,
    error: string | undefined
}

const INITIAL_STATE = {
    token: undefined,
    error: undefined,
} as authState;

export default function authHandler(state = INITIAL_STATE, action: action){
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {token: action.payload, error: false});
        case 'LOGIN_ERROR':
            return Object.assign({}, state, {token: false, error: action.payload});
        case 'LOGOUT':
            return Object.assign({}, state, {token:false,error:false});
        default:
            return state;
    }
};
