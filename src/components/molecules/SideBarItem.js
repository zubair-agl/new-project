import { View, Text, StyleSheet, Image, } from'react-native'
import { size, type, weight } from '../../theme/fonts'
import { colors } from '../../theme/colors'

const SideBarItem = (props)=> {
    return(
        <View style= {[styles.conatiner, {backgroundColor: props.backgroundColor}]}>
            <Image source={props.src} style= {styles.icons}/>
            <Text style= {styles.itemText}>Lorem Ipsum</Text>
            <Text style= {[styles.itemCountText, {backgroundColor: props.color}]}>{props.count}</Text>
        </View>
    )
}

export default SideBarItem

const styles= StyleSheet.create({
    conatiner: {
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icons: {
        height: 24,
        width: 24,
        tintColor: 'black'
    },
    itemText: {
        fontFamily: type.regular,
        fontSize:size.font15,
        fontWeight: weight.mid,
        color: colors.black,
        padding: 10
    },
    itemCountText: {
        padding: 10,
        position: 'absolute',
        right: 10,
        fontSize: size.font10,
        padding: 10,
        borderRadius: 8,
        color: colors.black
    }
})