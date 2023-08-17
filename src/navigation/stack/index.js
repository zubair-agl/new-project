/* screens under stack navigation */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login-screen';
import ScanQRScreen from '../../screens/scan-qr-screen';
import { useSelector } from 'react-redux';
import NotificationsTab from '../top/NotifTabs';
import styles from './styles';
import Bar from '../../../assets/images/bar.svg'

const Stack = createStackNavigator();

function StackNav() {
    const val = useSelector((state) => state.authReducer) // accessing redux state
    if (!val.isLoggedIn) {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='LoginScreen'
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        )
    }
    else if (val.isLoggedIn) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="NotifScreen" component={NotificationsTab}
                    options={{
                        title: 'Notifications',
                        headerTitleAlign: 'center',
                        headerTitleStyle: styles.notifHeaderTitle,
                        headerLeft: () => <Bar />
                    }}
                />
                <Stack.Screen name="ScanQRScreen" component={ScanQRScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

}

export default StackNav