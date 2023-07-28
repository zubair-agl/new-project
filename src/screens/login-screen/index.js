import { React, useState } from "react";
import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native"
import styles from "./styles";
import { colors } from "../../theme/colors";
import LoginForm from "../../components/LoginForm";

function LoginScreen(props) {
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

                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen