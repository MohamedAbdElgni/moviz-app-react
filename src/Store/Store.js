import { createStore} from 'redux';
import Reducer from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const myStore = createStore(Reducer,composeWithDevTools());

export default myStore;