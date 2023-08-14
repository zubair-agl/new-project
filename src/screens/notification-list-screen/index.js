import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, View, } from 'react-native'
import NotifStausBar from '../../components/molecules/NotifStatusBar'
import styles from './styles'
import NotificationsList from '../../components/organisms/NotificationLists'
import QrButton from '../../components/atoms/QrButton'
import { colors } from '../../theme/colors'
import { metrics } from '../../theme/metrics'
import ScanDialogue from '../../components/organisms/ScanDialogue'
import StarredList from '../../components/organisms/StarredList'
import ThemeButton from '../../components/atoms/ThemeButton'
import { useDispatch, useSelector } from 'react-redux';
import { getPushNotifList } from '../../redux/actions'



function NotificationListScreen(props) {

    const [modalVisible, setModalVisible] = useState(false); // pop-up state
    const [onShowAll, setOnShowAll] = useState(true)

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)
    console.log('redux state', val)

    useEffect(()=> {
        console.log('user token in notif screen',val.token)
        dispatch(getPushNotifList(val.token))
        console.log('push data in noti screen', val.notifList)
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
            <NotifStausBar
                onAllNotif={() => setOnShowAll(true)}
                onStarredNotif={() => setOnShowAll(false)}
            />
            {
                onShowAll ?
                    <NotificationsList data= {val.notifList} />
                    :
                    <StarredList />
            }


            <View style={{ height: metrics.screenHeight * 0.15 }}>
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
            />
        </SafeAreaView>
    )
}

export default NotificationListScreen