import axios from "axios";
import { DEVICE_DETAIL_URL, LOGIN_URL } from "./constants";
import { Alert } from 'react-native'; 

export async function sendDeviceInfo(deviceInfo, headers) {

  try{
    // sending device details to server
    const resPush = await axios.post(`${DEVICE_DETAIL_URL}`, deviceInfo, {headers}) 
    // console.log('devInforesponse', resPush.data)
  }
  catch(err) {
    console.log(err)
  }

}