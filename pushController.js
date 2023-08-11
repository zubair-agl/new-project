import React, { Component, useEffect } from "react";
import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// var PushNotification = require("react-native-push-notification");

function PushController() {

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
      onRegister: async function (token) {
        console.log("TOKEN:", token.token);
        await AsyncStorage.setItem('fcmToken', JSON.stringify(token.token))
      },

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
  })

  return null
}

export default PushController