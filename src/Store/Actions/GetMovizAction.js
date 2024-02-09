import axios from "axios"



export const GetMovizList = (page, lang) => (dispatch) => {
    const apiKey = "f70cf3e46e9ae3664a9c8aae2c4ec8ac";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}&language=${lang}`;

    return axios.get(apiUrl)
        .then((res) => dispatch({
            type: "GET_MOVIZ_LIST",
            payload: res.data.results

        }))
        .catch((err) => console.error(err));
}

export const GetMovizListBySearch = (page, lang, query) => (dispatch) => {
    const apiKey = "f70cf3e46e9ae3664a9c8aae2c4ec8ac";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&language=${lang}&query=${query}`;
    return axios.get(apiUrl)
        .then((res) => dispatch({
            type: "GET_MOVIZ_LIST_BY_SEARCH",
            payload: res.data.results
        }))
        .catch((err) => console.error(err));
}

export const GetMovieDetails = (mid, lang) => (dispatch) => {

    const apiKey = "f70cf3e46e9ae3664a9c8aae2c4ec8ac";
    const apiUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${apiKey}&language=${lang}`;
    return axios.get(apiUrl)
        .then((res) => dispatch({
            type: "GET_MOVIE_DETAILS",
            payload: res.data
        }))
        .catch((err) => console.error(err));
}

export const GetAllMovies = (page, lang) => (dispatch) => {
    const apiKey = "f70cf3e46e9ae3664a9c8aae2c4ec8ac";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}&language=${lang}`;
    return axios.get(apiUrl)
        .then((res) => dispatch({
            type: "ALL_MOVIES",
            payload: res.data.results
        }))
        .catch((err) => console.error(err));
}
