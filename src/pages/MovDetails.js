import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovieDetails } from '../Store/Actions/GetMovizAction'
function MovDetails() {
    const { mid } = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(state => state.combinMovizList.moviz)
    const lang = useSelector(state => state.combinlang.lang)
    useEffect(() => {
        console.log(mid, lang)
        console.log(movie)
        dispatch(GetMovieDetails(mid, lang));
    }, [mid, lang, dispatch , movie])


   




    return (
        <div className="container-fluid p-0 pt-3  bg-light">
            <div className="ps-3">
                <h1>Movie {movie.original_title} Page</h1>
            </div>
            <div className="main d-flex flex-wrap justify-content-start">
                <div className="card mb-3 rounded-0 p-o" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid " alt="movie img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title
                                ">{movie.title}</h5>
                                <p className="card-text">{movie.original_title}</p>
                                <p className="card-text">{movie.tagline}</p>
                                <p className="card-text">{movie.overview}</p>
                                <p className="card-text">Rating: {movie.vote_average}</p>
                                <p className="card-text">Popularity: {movie.popularity} Views</p>
                                <p className="card-text">Language: {movie.original_language}</p>
                                <p className="card-text">Release Date: {movie.release_date}</p>
                                <p className="card-text">Status: {movie.status}</p>
                                <p className="card-text">Budget: {movie.budget}</p>
                                <p className="card-text">Revenue: {movie.revenue}</p>
                                <p className="card-text">Runtime: {movie.runtime} minutes</p>
                                <p className="card-text">Homepage: <a href={movie.homepage} rel="noreferrer" target='_blank'>{movie.homepage}</a></p>
                                <p className="card-text"><small className="text-muted">{movie.release_date}</small></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovDetails