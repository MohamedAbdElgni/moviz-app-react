const INITIAL_VALUE = {
    lang: 'en',
    theme: 'light',
    movieList: [],
    counter: 0

}
export default function Reducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'CHANGE_LANG':
            return {
                ...state,
                lang: action.payload
            }
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload
            }
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                
                movieList: [ ...state.movieList,action.payload]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movieList: [...state.movieList.filter((mov) => mov.id !== action.payload.id)]
            }




        default:
            return state
    }
}
