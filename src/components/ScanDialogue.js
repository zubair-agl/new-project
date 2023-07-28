import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import QR from '../../assets/images/qrScan.svg'
import { size, type, weight } from '../theme/fonts';
import { metrics } from '../theme/metrics';
import ThemeButton from './ThemeButton';

const ScanDialogue = (props) => {
    

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onRequestClose={() => {
                    // this.closeButtonFunction()
                }}
            >
                <View
                    style={styles.modalView}
                >


                    <Text style={styles.heading}>Scan QR Code</Text>
                    <Text style={styles.content}>Place qr code inside the frame to scan please
                        avoid shake to get results quickly</Text>

                    <QR style={styles.qr} />
                    <ThemeButton
                        title={'Place Camera Code'}
                        onPress={props.onCancel}
                    />
                </View>
            </Modal>
            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalView: {
        backgroundColor: colors.secondary,
        height: '85%',
        marginTop: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
});

export default ScanDialogue;