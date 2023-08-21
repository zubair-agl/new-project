const { View, TouchableOpacity, StyleSheet, Text } = require("react-native")
import LogoutIcon from '../../../assets/images/logout.svg'
import { size, type, weight } from '../../theme/fonts'

const LogoutButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: props.backgroundColor }]}
            onPress={props.onPress}
        >
            <LogoutIcon />
            <Text style= {styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    )
}

export default LogoutButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: weight.semi,
        fontSize: size.font15,
        lineHeight: 24,
        fontFamily: type.regular,
        color: 'black',
        padding: 10
    }
})