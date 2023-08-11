import { React, useEffect, useState } from "react";
import { View, Text, StatusBar, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./styles";
import { colors } from "../../theme/colors";
import LoginForm from "../../components/organisms/LoginForm";
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import publicIP from 'react-native-public-ip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushController from "../../../pushController";


function LoginScreen(props) {

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)
    console.log('redux state', val)
 
    // state object for device details
    const [deviceInfo, setDeviceInfo] = useState({
        device_token: "",
        device_os: Platform.OS,
        device_os_version: Platform.Version,
        device_ip: "",
        //location: "",
    })

    useEffect(() => {
        // fetching saved fcm token from local strorage
        async function fetchFcmToken() {
            let fcmToken = JSON.parse(await AsyncStorage.getItem("fcmToken"))
            console.log('fcm', fcmToken)
            deviceInfo.device_token= fcmToken
            // setDeviceInfo({
            //     ...deviceInfo,
            //     device_token: fcmToken
            // })
        }
        // getting current location
        Geolocation.getCurrentPosition(info => {
            console.log(info.coords)
           // deviceInfo.location= info.coords
        });
        console.log(Platform.OS, Platform.Version)
        // getting ip address
        publicIP()
            .then(ip => {
                console.log('ip', ip);
                setDeviceInfo({
                    ...deviceInfo,
                    device_ip: ip
                })
            })
            .catch(error => {
                console.log(error);
            });
        fetchFcmToken()
    },[])



    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor={colors.primary}
            />
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <View style={styles.headContainer}>
                    <View style={styles.headingLayout}>
                        <Text style={styles.heading}>Hi,</Text>
                        <Text style={styles.heading}>Welcome <Text style={styles.emoticon}>👋</Text></Text>
                    </View>
                </View>
                <View style={styles.formContainer} enabled={false}>
                    <View style={styles.formLayout}>
                        <LoginForm
                            onSubmit={(values) => dispatch(userLogin(values, deviceInfo))}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen