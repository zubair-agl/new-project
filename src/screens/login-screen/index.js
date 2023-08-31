import { React, useEffect, useState, useCallback } from "react";
import { View, Text, StatusBar, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./styles";
import { colors } from "../../theme/colors";
import LoginForm from "../../components/organisms/LoginForm";
import { useDispatch, useSelector } from 'react-redux';
import publicIP from 'react-native-public-ip';
import { userLogin } from "../../redux/actions/authActions";


function LoginScreen(props) {

    const dispatch = useDispatch() // dispatching login action through this hook
    const fcmState= useSelector((state) => state.fcmReducer)
    const authtate= useSelector((state) => state.authReducer)

    // state object for device details
    const [deviceInfo, setDeviceInfo] = useState({
        device_token: '',
        device_os: Platform.OS,
        device_os_version: Platform.Version,
        device_ip: "",
    })

    useEffect(() => {
        console.log('in login fcmToken', fcmState.fcmToken)
        publicIP()
            .then(ip => {
                console.log('ip', ip);
                setDeviceInfo({
                    ...deviceInfo,
                    device_ip: ip,
                })
            })
            .catch(error => {
                console.log(error);
            });
            deviceInfo.device_token= fcmState.fcmToken

            console.log('device info', deviceInfo)
 
    }, [fcmState.fcmToken])

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
                            onSubmit={async(values) => {
                                let res= await dispatch(userLogin(values, deviceInfo))
                                if(res.status.message === 'Login success') {
                                    props.navigation.navigate('NotifScreen')
                                }
                            }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen