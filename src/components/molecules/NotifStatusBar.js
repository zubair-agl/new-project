import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../theme/colors'
import { metrics } from '../../theme/metrics'
import Bar from '../../../assets/images/bar.svg'
import { size, type, weight } from '../../theme/fonts'
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from '@react-navigation/native'

const NotifStausBar = (props) => {

    const [starred, setStarred] = useState(false)

    return (
        <DropShadow
            style={{
                shadowColor: "rgba(0, 0, 0, 0.18)",
                shadowOffset: {
                    width: 0,
                    height: 0.5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3,
            }}
        >
            <View style={styles.conatiner}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Bar style={{ position: 'absolute' }} />
                    <Text style={styles.heading}>Notifications</Text>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity style={[styles.categoryLabel, { borderBottomWidth: starred ? 0 : 2 }]}
                        onPress={() => {
                            setStarred(false)
                            props.onAllNotif()
                        }}
                    >
                        <Text style={[styles.categoryText, {color : starred ? 'rgba(0, 0, 0, 0.55)': colors.primary}]}>All</Text>
                        <Text style={styles.categoryCount}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryLabel, { borderBottomWidth: starred ? 2 : 0 }]}
                        onPress={() => {
                            setStarred(true)
                            props.onStarredNotif()
                        }}
                    >
                        <Text style={[styles.categoryText, {color : !starred ? 'rgba(0, 0, 0, 0.55)': colors.primary}]}>Starred</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </DropShadow>
    )
}

export default NotifStausBar

const styles = StyleSheet.create({
    conatiner: {
        height: metrics.screenHeight * 0.14,
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
        borderBottomWidth: 2,
        alignItems: 'center',
        marginRight: 20,
        borderColor: colors.primary
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