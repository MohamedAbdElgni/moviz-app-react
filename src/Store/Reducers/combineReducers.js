import { combineReducers } from 'redux';
import LangReducer from './LangReducer';

import MovieReducer from './MovieReducer';

export default combineReducers({
        combinlang: LangReducer,
        combinmovie: MovieReducer
});