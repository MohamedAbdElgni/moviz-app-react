import { createStore } from 'redux';
import reducers from './Reducers/combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const myStore = createStore(reducers, composeWithDevTools());

export default myStore;