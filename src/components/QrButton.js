import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { metrics } from "../theme/metrics";
import { colors } from "../theme/colors";
import { size, type, weight } from "../theme/fonts";
import QR from '../../assets/images/qr.svg';
import DropShadow from "react-native-drop-shadow";

const QrButton = (props) => {
    return (
        <DropShadow
        style={{
            shadowColor: "rgba(0, 0, 0, 0.12)",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 48,
          }}
        >
            <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
            >
                <QR />
                <Text style={styles.buttonText}>{"Scan QR Code"}</Text>
            </TouchableOpacity>
        </DropShadow>
    )
}

export default QrButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginBottom: 30,
        flexDirection: 'row',
        padding: 20,
    },
    buttonText: {
        color: colors.black,
        fontSize: size.font16,
        fontWeight: weight.semi,
        lineHeight: 19.36,
        fontFamily: type.regular,
        marginLeft: 20
    },
})