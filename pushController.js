import React, { Component, useEffect, useState } from "react";
import { request, check, PERMISSIONS, RESULTS } from "react-native-permissions";
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { setFcm } from "./src/redux/actions";

// var PushNotification = require("react-native-push-notification");

function PushController() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const requestNotificationPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    return result;
  };
  
  const checkNotificationPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  
    return result;
  };

  const requestPermission = async () => {
    const checkPermission = await checkNotificationPermission();
    if (checkPermission !== RESULTS.GRANTED) {
     const request = await requestNotificationPermission();
       if(request !== RESULTS.GRANTED){
            dispatch(setFcm(null))
        }
        else {
          setLoading(false)
        }
    }
  };

  const getToken = async(token) => {
    console.log("TOKEN:", token.token);
    dispatch(setFcm(token.token))
    await AsyncStorage.setItem('fcmToken', JSON.stringify(token.token))
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
    // PushNotification.localNotification({
    //   channelId: 'fcm_fallback_notification_channel', //his must be same with channelid in createchannel
    //   title: 'hello',
    //   message: 'test message'
    // })
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: (token) => {getToken(token)},

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification here

        // required on iOS only 
        //notification.finish(PushNotificationIOS.FetchResult.NoData);
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
    requestPermission()
  }, [loading])

  return null
}

export default PushController