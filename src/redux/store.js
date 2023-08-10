import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers(
{ authReducer: authReducer }
);
const configureStore = () => {
return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;