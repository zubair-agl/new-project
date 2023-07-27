import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { metrics } from "../theme/metrics";
import { colors } from "../theme/colors";
import { size, type } from "../theme/fonts";

const ThemeButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ThemeButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        backgroundColor: colors.primary,
        width: metrics.screenWidth * 0.8,
        height: metrics.screenHeight * 0.06,
        elevation: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: size.font16,
        fontWeight: '600',
        lineHeight: 19.36,
        fontFamily: type.regular
    }
})