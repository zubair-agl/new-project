import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducer/authReducer';
import { notifReducer } from './reducer/notifReducer';
import { fcmReducer } from './reducer/fcmReducer';

const rootReducer = combineReducers(
{ authReducer: authReducer, notifReducer: notifReducer, fcmReducer: fcmReducer }
);
const configureStore = () => {
return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;