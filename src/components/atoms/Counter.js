import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from '../../theme/colors'
import { metrics } from '../../theme/metrics'
import { size } from '../../theme/fonts'


const Counter = (props)=> {
    const notifState = useSelector((state) => state.notifReducer)

    return(
        <View style= {styles.conatiner}>
        <Text style= {styles.count}>{notifState.notifList.length}</Text>
        </View>
    )
}

export default Counter

const styles= StyleSheet.create({
    conatiner: {
         alignItems: 'center',
         justifyContent: 'center'
    },
    count: {
        backgroundColor: colors.primary_light,
        color: 'rgba(0, 0, 0, 1)',
        borderRadius: 30,
        padding: 5,
        fontSize: size.font16
    },
})