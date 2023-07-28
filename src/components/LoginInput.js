import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { metrics } from "../theme/metrics";
import { size, type } from "../theme/fonts";
import { colors } from "../theme/colors";


const LoginInput = (props) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                style={styles.input}
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                onBlur={props.onBlur}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
            />
            {
                props.password ?
                    <Image source={require('../../assets/images/eyeIcon.png')} style={styles.icon} />
                    :
                    <></>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: metrics.screenWidth * 0.8,
        height: metrics.screenHeight * 0.06,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray,
        fontSize: size.font16,
        fontFamily: type.regular,
        padding: 10,
        color: colors.black
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: -metrics.screenWidth * 0.1
    }
})

export default LoginInput