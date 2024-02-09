import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from "../Card";
import { ADD_MOVIE, REMOVE_MOVIE } from "../Store/Actions/MovieAction";
import { useDispatch } from 'react-redux';
function SearchPage(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const [q, setQ] = useState('');
    const [movis, setMovies] = useState([]);
    
    const lang = useSelector(state => state.combinlang.lang);
    const movieList = useSelector(state => state.combinmovie.movieList);
    const handelAddMovie = (mov) => {
        if (movieList.some((movie) => movie.id === mov.id)) {
            dispatch(REMOVE_MOVIE(mov));

        } else {
            dispatch(ADD_MOVIE(mov));

        }
    }
    useEffect(() => {
        const search = new URLSearchParams(location.search);
        setQ(search.get('q'));

        if (q) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f70cf3e46e9ae3664a9c8aae2c4ec8ac&query=${q} &language=${lang}`)
                .then((res) => setMovies(res.data.results))
                .catch((err) => console.error(err));
        }

        
    }, [location.search, q, lang, movieList]);

    




    return (
        <div className=''>
            {movis.length > 0 ? (
                <div className="container-fluid p-0 pt-3  bg-light">
                    <div className="text-center">
                        <h1 className=''>Search Results for <span className='text-danger font-weight-bold'>{q}</span></h1>
                    </div>
                    <div className="main d-flex flex-wrap justify-content-center">

                        {movis.map((mov) => {
                            return (
                                <MovieCard
                                    movie={mov}
                                    key={mov.id}
                                    isMovieAdded={movieList.some((movie) => movie.id === mov.id)}
                                    animation="ball"
                                    onAddMovie={handelAddMovie}
                                />
                            )
                        }
                        )}
                    </div>
                </div>
            ) : (
                <div className="container-fluid p-0 pt-3 bg-light main" style={{ minHeight: "74.7vh" }}>
                    <div className="text-center">
                        <h1 className=''>Search Results for <span className='text-danger font-weight-bold'>{q}</span></h1>
                    </div>

                    <div className="alert alert-danger" role="alert">
                        No Results Found
                    </div>

                </div>
            )}
        </div>
    );
}

export default SearchPage;