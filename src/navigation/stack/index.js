/* screens under stack navigation */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login-screen';
import ScanQRScreen from '../../screens/scan-qr-screen';
import { useSelector } from 'react-redux';
import DrawerTab from '../drawer/DrawerTab';

const Stack = createStackNavigator();

function StackNav() {
    const val = useSelector((state) => state.authReducer) // accessing redux state
    if (!val.token) {
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
    else if (val.token) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="NotifScreen" component={DrawerTab} options={{headerShown: false}}
                    
                />
                <Stack.Screen name="ScanQRScreen" component={ScanQRScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

}

export default StackNav