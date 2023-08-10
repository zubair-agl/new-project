import { initialState } from './initialState';
import * as t from './contants';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_LOGIN_STATE:
      return {
        ...state, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
        userId: action.payload.data.userName,
        token: action.payload.data.data
      };
    case t.SET_LOGOUT_STATE:
      return {
        ...state,
        isLoggedIn: false,
        userId: '',
        token: ''
      }
    default:
      return state;
  }
};