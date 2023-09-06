import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar} from 'react-native'
import styles from './styles'
import NotificationsList from '../../components/organisms/NotificationLists'
import { colors } from '../../theme/colors'
import { useDispatch, useSelector } from 'react-redux';
import { getPushNotifList } from '../../redux/actions/notifActions'



function AllNotifications(props) {

    const [modalVisible, setModalVisible] = useState(false); // pop-up state

    const dispatch = useDispatch() // dispatching login action through this hook
    const authState = useSelector((state) => state.authReducer)
    const notifState = useSelector((state) => state.notifReducer)

    useEffect(()=> {
        const unsubscribe= dispatch(getPushNotifList(authState.token))
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

            <NotificationsList data={notifState.notifList} />



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