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



function NotificationListScreen(props) {

    useEffect(() => {
        console.log(onShowAll)
    }, [onShowAll])

    const [modalVisible, setModalVisible] = useState(false); // pop-up state
    const [onShowAll, setOnShowAll] = useState(true)

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
                    <NotificationsList />
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