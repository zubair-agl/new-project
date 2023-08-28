import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import Avatar from '../../../assets/images/avatar.svg'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions';
import LogoutButton from '../atoms/LogoutButton';
import { metrics } from '../../theme/metrics';
import { size, type, weight } from '../../theme/fonts';
import { colors } from '../../theme/colors';
import SideBarItem from '../molecules/SideBarItem';
import AlertDialog from '../molecules/AlertDialog';

const SideBar = () => {

    const dispatch = useDispatch() // dispatching login action through this hook
    const val = useSelector((state) => state.authReducer)
    console.log(val.isLoggedIn)

    return (
        <View style={styles.container}>
            <View style={styles.itemsView} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar />
                    <Text style={styles.headerText}>{val.userId}</Text>
                </View>
                <View style={{ marginTop: metrics.screenHeight * 0.05 }} />
                <SideBarItem
                    src={require('../../../assets/images/png/profile.png')}
                    color={colors.primary_light}
                    count={2}
                    title={'Profile'}
                />
                <SideBarItem
                    src={require('../../../assets/images/png/location-marker.png')}
                    title={'Location'}
                />
                <SideBarItem
                    src={require('../../../assets/images/png/phone.png')}
                    title={'Phone'}
                />
                <SideBarItem
                    src={require('../../../assets/images/png/badge.png')}
                    color={colors.light_green}
                    count={7}
                    title={'Badge'}
                />
                <SideBarItem
                    src={require('../../../assets/images/png/wallet.png')}
                    title={'Wallet'}
                />
                <SideBarItem
                    src={require('../../../assets/images/png/menu.png')}
                    title={'Careers'}
                />


            </View>

            <View style={styles.buttonView}>
                {
                    val.isLoading ?
                        <ActivityIndicator size={'small'} />
                        :
                        <LogoutButton
                            onPress={() => {
                                AlertDialog(
                                    'Logout', 'Are you sure to logout?',
                                    () => dispatch(userLogout()))
                            }}
                        />
                }
            </View>
        </View>
    )
}

export default SideBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemsView: {
        margin: metrics.screenHeight * 0.025,
    },
    headerText: {
        fontFamily: type.regular,
        fontSize: size.font15,
        fontWeight: weight.semi,
        lineHeight: 24,
        padding: 10,
        color: 'black'
    },
    buttonView: {
        position: 'absolute',
        bottom: metrics.screenHeight * 0.025,
        left: metrics.screenWidth * 0.05
    }
})