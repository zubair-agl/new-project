import { React, useEffect, useState, useCallback } from "react";
import { View, Text, StatusBar, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./styles";
import { colors } from "../../theme/colors";
import LoginForm from "../../components/organisms/LoginForm";
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import publicIP from 'react-native-public-ip';
import PushController from "../../../pushController";
import AsyncStorage from "@react-native-async-storage/async-storage";


function LoginScreen() {

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)

    // state object for device details
    const [deviceInfo, setDeviceInfo] = useState({
        device_token: '',
        device_os: Platform.OS,
        device_os_version: Platform.Version,
        device_ip: "",
    })

    useEffect(() => {
        async function fetchFcmToken() {
            let fcmToken = JSON.parse(await AsyncStorage.getItem("fcmToken"))
            console.log('fcm', fcmToken)
            publicIP()
            .then(ip => {
                console.log('ip', ip);
                setDeviceInfo({
                    ...deviceInfo,
                    device_ip: ip,
                    device_token: fcmToken
                })
            })
            .catch(error => {
                console.log(error);
            });
        }
        fetchFcmToken()
        
    }, [])



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
                            onSubmit={(values) => {
                                console.log(deviceInfo)
                                if (deviceInfo.device_token) {
                                    dispatch(userLogin(values, deviceInfo))
                                }
                            }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
            <PushController />
        </>
    )
}

export default LoginScreen