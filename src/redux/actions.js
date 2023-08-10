import * as t from './contants';
import { Alert } from 'react-native'; // to show alerts in app
import { login } from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendDeviceInfo } from '../api/nativeServices';


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
  console.log(deviceInfo)
  return async (dispatch) => {
    try {
      const response = await login(input)
      console.log('response in actions', response.data.data)
      if (response.status.message === 'Login success') {
        await sendDeviceInfo(deviceInfo) // hitting post request to send device details to server
        setLoginLocal(response.data.data) // calling function to save user token locally
        dispatch(setLoginState({ ...response, userId: response.data.userName }))
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

export const userLogout = (input) => {
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