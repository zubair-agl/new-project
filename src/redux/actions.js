import * as t from './contants';
import { Alert } from 'react-native'; // to show alerts in app
import { login } from '../api/authService';

// dispatches the "payload" to reducer
const setLoginState = (loginData) => {
    return {
      type: t.SET_LOGIN_STATE,
      payload: loginData,
    };
  };

export const userLogin = (input) => {
  return async (dispatch) => {
    try{
        const response = await login(input)
        console.log('response in actions',response.data)
        if (response.status.message == 'Login success') {
            dispatch(setLoginState({...response, userId: response.data.userName}))
        }
        else {
            Alert.alert('Login Failed', 'Username or Password is incorrect');
        }
    }
    catch(error){
        Alert.alert('Login Failed', 'Some error occured, please retry')
        console.log(error)
    }  
  };
};