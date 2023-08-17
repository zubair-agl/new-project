import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getPushNotifList } from '../../redux/actions'
import { useFocusEffect } from '@react-navigation/native';



function StarredNotifications(props) {

    const [modalVisible, setModalVisible] = useState(false); // pop-up state
    const [onShowAll, setOnShowAll] = useState(true)

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)

    useFocusEffect(
        React.useCallback(()=> {
            const unsubscribe = dispatch(getPushNotifList(val.token))
            return () => unsubscribe
        }, [])
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text style= {{color: 'black'}}>No Data Here!</Text>
        </SafeAreaView>
    )
}

export default StarredNotifications