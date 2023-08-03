import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../../theme/colors';
import QR from '../../../assets/images/qrScan.svg'
import { size, type, weight } from '../../theme/fonts';
import { metrics } from '../../theme/metrics';
import ThemeButton from '../atoms/ThemeButton';
import Modal from "react-native-modal";
import Close from '../../../assets/images/close.svg'
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScanDialogue = (props) => {

    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

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
                    <QRCodeScanner
                        onRead={onSuccess}
                        //flashMode={RNCamera.Constants.FlashMode.torch}
                        topContent={
                            <>
                                <Text style={styles.heading}>Scan QR Code</Text>
                                <Text style={styles.content}>Place qr code inside the frame to scan please
                                    avoid shake to get results quickly</Text>
                            </>
                        }
                        showMarker
                        customMarker={
                            <QR style={styles.qr} />
                        }
                        cameraStyle={{ position: 'absolute', height: 200, width: 200, alignSelf: 'center' }}
                        bottomContent={
                            <ThemeButton
                                title={'Place Camera Code'}
                                onPress={props.onPress} // function to call on button press
                            />
                        }
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