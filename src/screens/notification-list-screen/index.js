import {useState} from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import NotifStausBar from '../../components/NotifStatusBar'
import styles from './styles'
import NotificationsList from '../../components/NotificationLists'
import QrButton from '../../components/QrButton'
import { colors } from '../../theme/colors'
import { metrics } from '../../theme/metrics'
import ScanDialogue from '../../components/ScanDialogue'

function NotificationListScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);

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
            <QrButton
                onPress={()=> setModalVisible(true)}
            />
            
            </View>
            <ScanDialogue
                visible= {modalVisible}
                onCancel= {()=> {
                    setModalVisible(!modalVisible)
                    props.navigation.navigate('ScanScreen')
                }}
             />
        </SafeAreaView>
    )
}

export default NotificationListScreen