import axios from "axios";
import { DEVICE_DETAIL_URL, LOGIN_URL, PUSH_NOTIF_URL } from "./constants";
import { Alert } from 'react-native'; 

export async function getPushNotifications(userToken) {

  try{
    // sending device details to server
    const headers = {
        'Authorization': userToken
    }
    console.log('headers in get Notif', headers)
    const res = await axios.post(`${PUSH_NOTIF_URL}`, {}, {headers}) 
    // console.log('pushresponse', res.data)
    return res.data
  }
  catch(err) {
    console.log(err)
    Alert.alert('Error', 'some error occured while fetching notif deatils')
  }

}