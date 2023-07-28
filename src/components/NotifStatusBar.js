import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../theme/colors'
import { metrics } from '../theme/metrics'
import Bar from '../../assets/images/bar.svg'
import { size, type, weight } from '../theme/fonts'
import DropShadow from "react-native-drop-shadow";

const NotifStausBar = () => {
    return (
        <DropShadow
        style={{
            shadowColor: "rgba(0, 0, 0, 0.18)",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 6,
          }}
        >
        <View style={styles.conatiner}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                {/* <Image source={require('../../assets/images/bar.png')} style={{ height: 30, width: 30 , marginLeft: 20}} /> */}
                <Bar style={{ position: 'absolute'}}/>
                
                <Text style={styles.heading}>Notifications</Text>
            </View>


            <View style={styles.category}>
                <TouchableOpacity style={styles.categoryLabel}>
                    <Text style={styles.categoryText}>All</Text>
                    <Text style={styles.categoryCount}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.categoryLabel, { borderBottomWidth: 0 }]}>
                    <Text style={styles.categoryText}>Starred</Text>
                </TouchableOpacity>

            </View>




        </View>
        </DropShadow>
    )
}

export default NotifStausBar

const styles = StyleSheet.create({
    conatiner: {
        height: metrics.screenHeight* 0.14,
        width: metrics.screenWidth,
        backgroundColor: colors.secondary,
    },
    category: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        marginLeft: 20
    },
    categoryLabel: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginRight: 20,
        //padding: 10
    },
    categoryText: {
        padding: 10,
        fontFamily: type.regular,
        fontSize: size.font18,
        lineHeight: 21.78,
        fontWeight: weight.mid,
        color: 'rgba(0, 0, 0, 0.55)'
    },
    categoryCount: {
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        backgroundColor: colors.primary_light,
        color: 'rgba(0, 0, 0, 1)'
    },
    heading: {
        fontWeight: weight.mid,
        fontSize: size.font20,
        lineHeight: 24.2,
        fontFamily: type.regular,
        color: colors.black,
        padding: 20,
        width: '100%',
        textAlign: 'center'
    }
})