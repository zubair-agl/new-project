import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationsTab from '../top/NotifTabs';
import styles from './styles';
import Bar from '../../../assets/images/bar.svg'
import { TouchableOpacity } from 'react-native';
import SideBar from '../../components/organisms/SideBar';
import Scan from '../../../assets/images/qr.svg'

const Drawer = createDrawerNavigator();

function DrawerTab() {

    const defaultOptions = ({navigation}) => ({
        title: 'Notifications',
        headerTitleAlign: 'center',
        headerTitleStyle: styles.notifHeaderTitle,
        headerLeft: () =>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Bar />
            </TouchableOpacity>,
        headerRight: () =>
        <TouchableOpacity style= {{margin: 10}} onPress={()=> navigation.navigate('ScanQRScreen')}>
            <Scan />
        </TouchableOpacity>    

    })
    return (
        <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
            <Drawer.Screen name="Feed" component={NotificationsTab}
                options={defaultOptions}
            />
        </Drawer.Navigator>
    );
}

export default DrawerTab