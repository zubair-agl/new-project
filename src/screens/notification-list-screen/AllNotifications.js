import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, View, } from 'react-native'
import styles from './styles'
import NotificationsList from '../../components/organisms/NotificationLists'
import QrButton from '../../components/atoms/QrButton'
import { colors } from '../../theme/colors'
import ScanDialogue from '../../components/organisms/ScanDialogue'
import { useDispatch, useSelector } from 'react-redux';
import { getPushNotifList } from '../../redux/actions'



function AllNotifications(props) {

    const [modalVisible, setModalVisible] = useState(false); // pop-up state

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)

    useEffect(()=> {
        const unsubscribe= dispatch(getPushNotifList(val.token))
        return () => unsubscribe
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <>
                <StatusBar
                    animated={true}
                    backgroundColor={colors.secondary}
                    barStyle={'dark-content'}
                />
            </>

            <NotificationsList data={val.notifList} />



            {/* <View style={{  position: 'absolute', bottom: 0}}>
                <QrButton
                    onPress={() => {
                        props.navigation.navigate('ScanQRScreen')
                    }}
                />
            </View>
            <ScanDialogue
                visible={modalVisible}
                onPress={() => {
                    setModalVisible(false)
                    props.navigation.navigate('ScanQRScreen')
                }}
                onDismiss={() => {
                    setModalVisible(!modalVisible)
                }}
            /> */}
        </SafeAreaView>
    )
}

export default AllNotifications