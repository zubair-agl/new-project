/* screens under stack navigation */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login-screen';
import NotificationListScreen from '../../screens/notification-list-screen';
import ScanScreen from '../../screens/scan-screen';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="NotifScreen" component={NotificationListScreen} />
            <Stack.Screen name="ScanScreen" component={ScanScreen} />
        </Stack.Navigator>
    );
}

export default StackNav