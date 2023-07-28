import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from './styles';


function ScanQRScreen(props) {
    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    return (
        <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
            }
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => { props.navigation.goBack() }}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    );

}

export default ScanQRScreen