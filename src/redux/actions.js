import * as t from './contants';
import { Alert } from 'react-native'; // to show alerts in app
import { login } from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendDeviceInfo } from '../api/nativeServices';
import { DEVICE_DETAIL_URL } from '../api/constants';
import axios from "axios";


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
    payload: loginData,
  };
};

// function to store token in local storage
const setLoginLocal = async (loginToken) => {
  try {
    await AsyncStorage.setItem('loginToken', JSON.stringify(loginToken));
  } catch (err) {
    console.log(err);
  }
};


export const userLogin = (input, deviceInfo) => {
  console.log('device info in req',deviceInfo, input)
  return async (dispatch) => {
    try {
      const response = await login(input)
      console.log('response in actions', response.data.data)
      if (response.status.message === 'Login success') {
        dispatch(setLoginState({ ...response, userId: response.data.userName }))
        setLoginLocal(response.data.data) // calling function to save user token locally
        const headers= {'Authorization': response.data.data}
        await sendDeviceInfo(deviceInfo, headers)
      }
      else {
        Alert.alert('Login Failed', 'Username or Password is incorrect');
      }
    }
    catch (error) {
      Alert.alert('Login Failed', 'Some error occured, please retry')
      console.log(error)
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