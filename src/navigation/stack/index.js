/* screens under stack navigation */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login-screen';
import ScanQRScreen from '../../screens/scan-qr-screen';
import { useSelector } from 'react-redux';
import DrawerTab from '../drawer/DrawerTab';
import InitLoadingScreen from '../../screens/init-loading-screen/InitLoadingScreen';

const Stack = createStackNavigator();

function StackNav() {
    const val = useSelector((state) => state.authReducer) // accessing redux state
   
        return (

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='InitLoading'
            >
                <Stack.Screen name='InitLoading' component={InitLoadingScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen
                    name="NotifScreen"
                    component={DrawerTab}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
    



export default StackNav