import React, {Component} from "react";
import PushNotification from "react-native-push-notification";
// var PushNotification = require("react-native-push-notification");

export default class PushController extends Component{
    componentDidMount(){
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
      PushNotification.localNotification({
        channelId:'fcm_fallback_notification_channel', //his must be same with channelid in createchannel
        title:'hello',
        message:'test message'
      })
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
              console.log("TOKEN:", token);
            },
          
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
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
    }

    render(){
        return null;
    }
}