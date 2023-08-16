import axios from "axios";
import { LOGIN_URL, QR_LOGIN_URL } from "./constants";
import { Alert } from 'react-native'

export async function login(body, deviceInfo) {
    try {
        const res = await axios.post(`${LOGIN_URL}`, body )
        console.log('response in services', res.data)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export async function qrLogin(userToken, body) {
    try{
      // sending device details to server
      const headers = {
          'Authorization': userToken
      }
      const res = await axios.post(`${QR_LOGIN_URL}`, {body}, {headers}) 
      console.log('pushresponse', res.data)
      return res.data
    }
    catch(err) {
      console.log(err)
      Alert.alert('Error', 'some error occured on qr scan')
    }
  }