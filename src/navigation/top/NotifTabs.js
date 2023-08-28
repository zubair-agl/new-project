import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllNotifications from '../../screens/notification-list-screen/AllNotifications';
import StarredNotifications from '../../screens/notification-list-screen/StarredNotifications';
import styles from './styles';
import { colors } from '../../theme/colors';
import { TabBarIndicator } from 'react-native-tab-view';
import Bar from '../../../assets/images/bar.svg'
import Counter from '../../components/atoms/Counter';
import QrButton from '../../components/atoms/QrButton';

const Tab = createMaterialTopTabNavigator();

function NotificationsTab({ navigation }) {
  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: { backgroundColor: colors.secondary, },
        tabBarItemStyle: { width: 'auto', flexDirection: 'row-reverse' },
        tabBarIconStyle: { width: 'auto', height: 'auto', alignSelf: 'right' }
      }}
      >
        <Tab.Screen name="AllNotif" component={AllNotifications} options={{ tabBarIcon: () => <Counter />, title: 'All', }} />
        <Tab.Screen name="StarredNotif" component={StarredNotifications} options={{ title: 'Starred' }} />
      </Tab.Navigator>
      {/* <QrButton
        onPress={() => navigation.navigate('ScanQRScreen')}
        style={styles.scanButton}
      /> */}
    </>
  );
}

export default NotificationsTab

