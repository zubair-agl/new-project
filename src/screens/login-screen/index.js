import { React, useState } from "react";
import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./styles";
import { colors } from "../../theme/colors";
import LoginForm from "../../components/organisms/LoginForm";
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

function LoginScreen(props) {

    const dispatch = useDispatch() // dispatching login action through this hook
    const val= useSelector((state)=> state.loginReducer)
    console.log(val)
    
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
                            onSubmit= {(values)=> dispatch(userLogin(values))}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen