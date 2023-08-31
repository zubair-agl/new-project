
import * as t from '../constants/fcmConstants';

const setLoading = (loading) => {
    return {
      type: t.SET_LOADING,
      payload: loading
    }
  }
  
  export const setFcm = (fcmToken) => {
    return {
      type: t.FCM_TOKEN,
      payload: fcmToken
    }
  }  