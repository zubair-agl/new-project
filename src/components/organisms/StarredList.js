import * as React from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { metrics } from '../../theme/metrics'
import { colors } from '../../theme/colors'
import { size, type, weight } from '../../theme/fonts'

const StarredList = (props) => {
    return (
        <View style={styles.conatiner}>
            <Text style= {styles.title}>No Data Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        height: metrics.screenHeight * 0.7,
        width: metrics.width,
        alignItems: 'center',
        justifyContent:'center'
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

export default StarredList