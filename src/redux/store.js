import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers(
{ loginReducer: loginReducer }
);
const configureStore = () => {
return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;