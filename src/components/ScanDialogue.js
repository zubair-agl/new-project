import React, { useState } from 'react';
import { Alert, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import QR from '../../assets/images/qrScan.svg'
import { size, type, weight } from '../theme/fonts';
import { metrics } from '../theme/metrics';
import ThemeButton from './ThemeButton';
import Modal from "react-native-modal";
import Close from '../../assets/images/close.svg'

const ScanDialogue = (props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                isVisible={props.visible}
                style={{ margin: 0 }}
            >
                <View
                    style={styles.modalView}
                >
                    <TouchableOpacity
                        onPress={props.onDismiss} // function to close pop-up
                        style={styles.dismiss}
                    >
                        <Close />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Scan QR Code</Text>
                    <Text style={styles.content}>Place qr code inside the frame to scan please
                        avoid shake to get results quickly</Text>

                    <QR style={styles.qr} />
                    <ThemeButton
                        title={'Place Camera Code'}
                        onPress={props.onPress} // function to call on button press
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: colors.secondary,
        height: '85%',
        marginTop: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontFamily: type.regular,
        fontWeight: weight.bold,
        fontSize: size.font20,
        lineHeight: 24.2,
        textAlign: 'center',
        color: colors.black
    },
    content: {
        fontFamily: type.regular,
        fontWeight: weight.mid,
        fontSize: size.font14,
        lineHeight: 16.94,
        textAlign: 'center',
        color: 'rgba(65, 65, 65, 1)',
        width: metrics.screenWidth * 0.8,
        flexWrap: 'wrap',
        marginTop: '3%'
    },
    qr: {
        marginVertical: '20%'
    },
    dismiss: {
        position: 'absolute',
        top: metrics.screenHeight * 0.03,
        right: metrics.screenHeight * 0.03
    }
});

export default ScanDialogue;