import * as React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native'
import Icon from '../../../assets/images/icon.svg'
import { metrics } from '../../theme/metrics'
import { colors } from '../../theme/colors'
import { size, type, weight } from '../../theme/fonts'
import { useSelector } from 'react-redux'
import moment from 'moment';

const NotificationsList = (props) => {
    const date = new Date();
    console.log(date.toLocaleString())
    const val = useSelector((state) => state.authReducer)

    return (
        <View>
            {
                val.isLoading ? <ActivityIndicator />
                :
                <FlatList
                data={props.data ? props.data : []}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={[styles.cardContainer,
                            { backgroundColor: !item.readStatus ? colors.primary_light : colors.secondary }]}
                        >
                            <View>
                                <Icon />
                                {!item.readStatus && <View style={styles.unreadStatus} />}
                            </View>

                            <View style={[styles.cardContent]}>
                                <Text style={styles.title}>{item.title.slice(0, 5)}</Text>
                                <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
                                <Text style={styles.content}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item._id}
            />
            }
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    unreadStatus: {
        height: 12,
        width: 12,
        backgroundColor: colors.primary,
        alignSelf: 'flex-end',
        marginBottom: -10,
        position: 'absolute',
        borderRadius: 10
    }

})

export default NotificationsList