import * as t from '../constants/notifConstants';

const initialState = {
    notifList: [],
    isLoading: false,
    message: '',
}

export const notifReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_NOTIF_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case t.FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.payload
      }
    case t.PUSH_NOTIFICATIONS:
      return {
        ...state,
        notifList: action.payload.data,
        isLoading: false
      }
    default:
      return state;
  }
};