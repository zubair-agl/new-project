import * as t from '../constants/fcmConstants';

const initialState = {
    fcmToken: null,
    isLoading: false
}

export const fcmReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.payload
      }
    default:
      return state;
  }
};