import { combineReducers } from 'redux';
import LangReducer from './LangReducer';
import MovieReducer from './MovieReducer';
import GetMovizReducer from './GetMovizReducer';

export default combineReducers({
        combinlang: LangReducer,
        combinmovie: MovieReducer,
        combinMovizList: GetMovizReducer
});