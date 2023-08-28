import React from 'react';
import {
    Text,
    TouchableOpacity,
    Linking,
    SafeAreaView,
    Image
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from './styles';
import Close from '../../../assets/images/closeQR.svg'
import { metrics } from '../../theme/metrics';
import Scan from '../../../assets/images/scan.svg'
import More from '../../../assets/images/more-vertical.svg'
import ZapOff from '../../../assets/images/zap-off.svg'
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { qrLogin } from '../../api/authService';
import { useState } from 'react';

function ScanQRScreen(props) {

    const [flashMode, setFlashMode] = useState(false)

    const onSuccess = async e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
        //console.log('scan info',e, val.token)
        const payload = {
            'screencode': e.data
        }
        const res = await qrLogin(val.token, payload)
        console.log('dekh idhar', res.data)
        if (res.status.message == 'success') {
            Toast.show('Login Successfull!');
            props.navigation.goBack()
        }
    };

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)


    return (
        <SafeAreaView style={styles.container}>
            <QRCodeScanner
                showMarker
                onRead={onSuccess}
                flashMode={
                    flashMode ? RNCamera.Constants.FlashMode.torch :
                        RNCamera.Constants.FlashMode.off
                }
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
                onPress={() => setFlashMode(!flashMode)}
            >
                <Image source={flashMode ? require('../../../assets/images/png/flash-off.png') : require('../../../assets/images/png/flash-on.png')}
                    style={{ height: 24, width: 24, tintColor: 'white' }}
                />
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