import * as t from '../constants/authConstants';

const initialState = {
    isLoggedIn: false,
    userId: '',
    token: null,
    data: '',
    isLoading: false,
    message: '',
    initialLoading: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case t.SET_INITIAL_LOADING:
            return {
                ...state,
                initialLoading: action.payload
            }
        case t.SET_LOGIN_STATE:
            return {
                ...state, // this is what we expect to get back from API call and login page input
                isLoggedIn: true, // we set this as true on login
                userId: action.payload.data.userName,
                token: action.payload.data.data,
                isLoading: false
            };
        case t.RETRIEVE_TOKEN:
            return {
                ...state,
                token: action.payload,
                initialLoading: false
            }
        case t.SET_LOGOUT_STATE:
            return {
                ...state,
                isLoggedIn: false,
                userId: '',
                token: null,
                isLoading: false
            }
        default:
            return state;
    }
};