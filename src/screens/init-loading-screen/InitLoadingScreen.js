import { View, ActivityIndicator } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { retrieveToken } from '../../redux/actions/authActions';
import PushNotification from "react-native-push-notification";
import { setFcm } from '../../redux/actions/fcmActions';


function InitLoadingScreen(props) {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.authReducer)
    const fcm = useSelector((state) => state.fcmReducer)

    const nav = async()=> {
        await props.navigation.navigate(state.token ? 'NotifScreen' : 'LoginScreen')
    }

    const getToken = async(token) => {
        console.log("TOKEN:", token.token);
        dispatch(setFcm(token.token))
      }
    
      useEffect(() => {
        PushNotification.createChannel(
          {
            channelId: "fcm_fallback_notification_channel", // (required)
            channelName: "Special messasge", // (required)
            channelDescription: "Notification for special message", // (optional) default: undefined.
            importance: 4, // (optional) default: 4. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
          },
          (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
        PushNotification.configure({
          // (optional) Called when Token is generated (iOS and Android)
          onRegister: (token) => {getToken(token)},
    
          // (required) Called when a remote or local notification is opened or received
          onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
          },
          // Android only
          senderID: "1028018228642",
          // iOS only
          permissions: {
            alert: true,
            badge: true,
            sound: true
          },
          popInitialNotification: true,
          requestPermissions: true
        });
        console.log('fcm token in int', fcm.fcmToken)
      }, [fcm.fcmToken])


    useEffect(() => {
        console.log('state app', state.initialLoading)
        dispatch(retrieveToken())
        nav()
        
    }, [state.token])

    return (
        <View style={styles.container}>
            <ActivityIndicator />
            {/* <PushController /> */}
        </View>
    )
}

export default InitLoadingScreen