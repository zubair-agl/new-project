/* screens under stack navigation */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login-screen';
import NotificationListScreen from '../../screens/notification-list-screen';
import ScanQRScreen from '../../screens/scan-qr-screen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function StackNav() {
    const val = useSelector((state) => state.authReducer) // accessing redux state
    if(!val.isLoggedIn) {
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
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="NotifScreen" component={NotificationListScreen} />
                <Stack.Screen name="ScanQRScreen" component={ScanQRScreen} />
            </Stack.Navigator>
        )
    }
    
}

export default StackNav