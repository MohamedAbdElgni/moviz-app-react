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
        case 'counter':
            return {
                ...state,
                counter: action.payload
            }
        case 'ADD_MOVIE':
            return {
                ...state,

                movieList: [...state.movieList, action.payload]
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
