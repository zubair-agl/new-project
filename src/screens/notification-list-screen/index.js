import * as React from 'react'
import { Image, SafeAreaView, Text, StatusBar, View } from 'react-native'
import NotifStausBar from '../../components/NotifStatusBar'
import styles from './styles'
import NotificationsList from '../../components/NotificationLists'
import Bar from '../../../assets/images/bar.svg'
import QrButton from '../../components/QrButton'
import { colors } from '../../theme/colors'
import { metrics } from '../../theme/metrics'

function NotificationListScreen() {
    return(
        <SafeAreaView style= {styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.secondary}
                barStyle= {'dark-content'}
            />
            <NotifStausBar />
            <NotificationsList />
            <View style= {{height: metrics.screenHeight*0.15}}>
            <QrButton/>
            </View>
        </SafeAreaView>
    )
}

export default NotificationListScreen