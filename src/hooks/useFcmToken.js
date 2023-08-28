import {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const useFcmToken = () => {
  const [fcmToken, setFCMToken] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      const status = await messaging().hasPermission();
      setPermissionStatus(status);
      setLoading(false);
    };

    checkPermission();
  }, []);

  useEffect(() => {
    const getFCMToken = async () => {
      if (permissionStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        const token = await messaging().getToken();
        setFCMToken(token);
      }
    };

    if (!loading) {
      getFCMToken();
    }
  }, [permissionStatus, loading]);

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      setPermissionStatus(messaging.AuthorizationStatus.AUTHORIZED);
    } catch (error) {
      setPermissionStatus(messaging.AuthorizationStatus.DENIED);
    } finally {
      setLoading(false); // Set loading to false after permission request is completed
    }
  };

  return {
    fcmToken,
    permissionStatus,
    requestPermission,
    loading,
  };
};

export default useFcmToken;