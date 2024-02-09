
const INITIAL_VALUE = {
    moviz: [],


}

export default function GetMovizReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {

        case "GET_MOVIZ_LIST":
            return {
                ...state,
                moviz: action.payload
            }
        case "GET_MOVIZ_LIST_BY_SEARCH":
            return {
                ...state,
                moviz: action.payload
            }
        case "GET_MOVIE_DETAILS":
            return {
                ...state,
                moviz: action.payload
            }
        case 'ALL_MOVIES':
            return {
                ...state,
                movieList: action.payload
            }
        default:
            return state;
    }

}




