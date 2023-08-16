import * as t from './contants';
import { Alert } from 'react-native'; // to show alerts in app
import { login, qrLogin } from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendDeviceInfo } from '../api/nativeServices';
import { DEVICE_DETAIL_URL } from '../api/constants';
import axios from "axios";
import { getPushNotifications } from '../api/pushNotifications';


const setLoading = (loading) => {
  return {
    type: t.SET_LOADING,
    payload: loading
  }
}

// dispatches the "payload" to reducer
const setLoginState = (loginData) => {
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData,
  };
};

// dispatches logout action to reducer
const setLogoutState = () => {
  return {
    type: t.SET_LOGOUT_STATE,
  };
};

// dispatches getPushNotif to reducer
const setPushNotifState = (notifData) => {
  return {
    type: t.PUSH_NOTIFICATIONS,
    payload: notifData
  }
}

// function to store token in local storage
const setLoginLocal = async (loginToken) => {
  try {
    await AsyncStorage.setItem('loginToken', JSON.stringify(loginToken));
  } catch (err) {
    console.log(err);
  }
};


export const userLogin = (input, deviceInfo) => {
  console.log('device info in req', deviceInfo, input)
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await login(input)
      if (response.status.message === 'Login success') {
        dispatch(setLoginState({ ...response, userId: response.data.userName }))
        setLoginLocal(response.data.data) // calling function to save user token locally
        const headers = { 'Authorization': response.data.data }
        await sendDeviceInfo(deviceInfo, headers)
      }
      else {
        Alert.alert('Login Failed', 'Username or Password is incorrect');
        dispatch(setLoading(false))
      }
    }
    catch (error) {
      Alert.alert('Login Failed', 'Some error occured, please retry')
      console.log(error)
      dispatch(setLoading(false))
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.clear()
      dispatch(setLogoutState())
    }
    catch (error) {
      Alert.alert('Login Failed', 'Some error occured, please retry')
      console.log(error)
    }
  };
};

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

export const qrScanLogin = (userToken, body) => {
  return async (dispatch) => {
      dispatch(setLoading(true))
      const response = await qrLogin(userToken, body)
  }
}