/* screens under stack navigation */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login-screen';
import NotificationListScreen from '../../screens/notification-list-screen';
import ScanQRScreen from '../../screens/scan-qr-screen';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='LoginScreen'
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="NotifScreen" component={NotificationListScreen} />
            <Stack.Screen name="ScanQRScreen" component={ScanQRScreen} />
        </Stack.Navigator>
    );
}

export default StackNav