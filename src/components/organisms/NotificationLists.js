import * as React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList, } from 'react-native'
import Icon from '../../../assets/images/icon.svg'
import { metrics } from '../../theme/metrics'
import { colors } from '../../theme/colors'
import { size, type, weight } from '../../theme/fonts'

const NotificationsList = (props) => {
   const data = [
    'a', 'b', 'c', 'd'
   ]

    return (
        <View style={styles.conatiner} >
            <FlatList 
            data={data}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity style={[styles.cardContainer, { backgroundColor: colors.primary_light }]}
                
            >
                <Icon />
                <View style={[styles.cardContent]}>
                    <Text style={styles.title}>Lorem Ipsum</Text>
                    <Text style={styles.time}>5 min ago</Text>
                    <Text style={styles.content}>Lorem ipsum careted new development</Text>
                </View>
            </TouchableOpacity>
                )
            }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        height: metrics.screenHeight * 0.7,
        width: metrics.width,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.08)',
        padding: 20,
        width: metrics.screenWidth,
    },
    title: {
        fontFamily: type.regular,
        fontWeight: weight.semi,
        fontSize: size.font16,
        lineHeight: 30.36,
        color: 'rgba(0, 0, 0, 0.85)',
        flexWrap: 'wrap'
    },
    time: {
        fontFamily: type.regular,
        fontWeight: weight.low,
        fontSize: size.font12,
        lineHeight: 14.74,
        color: 'rgba(0, 0, 0, 0.87)',
        flexWrap: 'wrap'
    },
    content: {
        fontFamily: type.regular,
        fontWeight: weight.low,
        fontSize: size.font14,
        lineHeight: 17.57,
        color: 'rgba(0, 0, 0, 0.75)',
        flexWrap: 'wrap'
    },
    cardContent: {
        marginLeft: 20,
        width: metrics.screenWidth * 0.7,
    }

})

export default NotificationsList