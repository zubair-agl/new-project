import { getPushNotifications } from "../../api/pushNotifications"
import * as t from '../constants/notifConstants';

const setLoading = (loading) => {
    return {
      type: t.SET_NOTIF_LOADING,
      payload: loading
    }
  }

export const getPushNotifList = (userToken) => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true))
        const response = await getPushNotifications(userToken)
        dispatch(setPushNotifState(response))
      }
      catch (error) {
        Alert.alert('Notifications Error', 'Some error occured, please retry')
        console.log(error)
      }
    }
  }

// dispatches getPushNotif to reducer
const setPushNotifState = (notifData) => {
    return {
      type: t.PUSH_NOTIFICATIONS,
      payload: notifData
    }
  }
