import * as t from '../constants/authConstants';
import { Alert } from 'react-native'; // to show alerts in app
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { login } from '../../api/authService';
import { sendDeviceInfo } from '../../api/nativeServices';



const setLoading = (loading) => {
  return {
    type: t.SET_LOADING,
    payload: loading
  }
}


const setInitialLoading = (loading) => {
  return {
    type: t.SET_INITIAL_LOADING,
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
const setLogoutState = (data) => {
  return {
    type: t.SET_LOGOUT_STATE,
    payload: data
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

const setRetrievedToken = (userToken)=> {
  return{
    type: t.RETRIEVE_TOKEN,
    payload: userToken
  }
}

export const retrieveToken = ()=> {
  return async (dispatch) => {
    try{
      dispatch(setInitialLoading(true))
      const userToken =  JSON.parse(await AsyncStorage.getItem('loginToken'))
      dispatch(setRetrievedToken(userToken))
    }
    catch(err) {
      console.log(err)
    }
  }
}


export const userLogin = (input, deviceInfo) => {
  console.log('device info', deviceInfo)

  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await login(input)
      if (response.status.message === 'Login success') {
        Toast.show('Login Successfull!');
        dispatch(setLoginState({ ...response }))
        setLoginLocal(response.data.data) // calling function to save user token locally
        const headers = { 'Authorization': response.data.data }
        await sendDeviceInfo(deviceInfo, headers)
        return response
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
  console.log('insode userlogout')
  return async (dispatch) => {
    await AsyncStorage.removeItem('loginToken')
    console.log('insosdne userlogout')
    dispatch(setLoading(true))
    dispatch(setLogoutState())
  };
};
