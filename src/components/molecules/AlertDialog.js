import { Alert } from 'react-native'

const AlertDialog = (title, msg, onPress) => {
    Alert.alert(
        title,
        msg,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Yes', onPress: onPress },
        ]
    )
}

export default AlertDialog