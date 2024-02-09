const INITIAL_VALUE = {
    movieList: [],

}

export default function MovieReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
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

