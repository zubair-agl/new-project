import axios from "axios";
import { DEVICE_DETAIL_URL, LOGIN_URL } from "./constants";
import { useDispatch, useSelector } from 'react-redux';

export async function sendDeviceInfo(deviceInfo) {

  const val = useSelector((state) => state.authReducer) // accessing redux state for accessing user token
  const headers= {'Authorization': val.token} // headers for post request

  try{
    // sending device details to server
    const resPush = await axios.post(`${DEVICE_DETAIL_URL}`, deviceInfo, {headers}) 
    console.log('pushresponse', resPush.data)
  }
  catch(err) {
    console.log(err)
  }

}