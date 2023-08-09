import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';

const store= configureStore()

const NewProject= ()=> (
    <Provider store= {store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => NewProject);
