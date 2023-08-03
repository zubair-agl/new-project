import React from 'react';
import {
    Text,
    TouchableOpacity,
    Linking,
    SafeAreaView, Dimensions, View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from './styles';
import Close from '../../../assets/images/closeQR.svg'
import { metrics } from '../../theme/metrics';
import Scan from '../../../assets/images/scan.svg'
import More from '../../../assets/images/more-vertical.svg'
import ZapOff from '../../../assets/images/zap-off.svg'


function ScanQRScreen(props) {
    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <QRCodeScanner
                showMarker
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.auto}
                cameraStyle={{
                    height: metrics.screenHeight
                }}
                bottomViewStyle={styles.bottomViewStyle}
                topViewStyle={styles.topViewStyle}

                customMarker={
                    <Scan />
                }
            />
            <TouchableOpacity
                style={styles.moreVerContainer}
            >
                <More />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.flashContainer}
            >
                <ZapOff />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.closeIconContainer}
                onPress={() => props.navigation.goBack()}
            >
                <Close />
            </TouchableOpacity>

        </SafeAreaView>



    );

}

export default ScanQRScreen