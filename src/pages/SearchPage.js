import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
function SearchPage(props) {
    const location = useLocation();
    const [q, setQ] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const search = new URLSearchParams(location.search);
        setQ(search.get('q'));

        if (q) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f70cf3e46e9ae3664a9c8aae2c4ec8ac&query=${q}`)
                .then((res) => setMovies(res.data.results))
                .catch((err) => console.error(err));
        }
    }, [location.search, q]);






    return (
        <div className=''>
            {movies.length > 0 ? (
                <div className="container-fluid p-0 pt-3  bg-light">
                    <div className="text-center">
                        <h1 className=''>Search Results for <span className='text-danger font-weight-bold'>{q}</span></h1>
                    </div>
                    <div className="main d-flex flex-wrap justify-content-center">

                        {movies.map((mov) => {
                            return (
                                <div className="card m-2 rounded-0" style={{ width: "18rem", height: "30rem", overflow: "hidden" }} key={mov.id}>
                                    <img src={`https://image.tmdb.org/t/p/w400${mov.poster_path}`} className="card-img-top" alt="movie img" style={{ height: "15rem" }} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ height: "3rem", overflow: "hidden" }}>{mov.title}</h5>
                                        <p className="card-text" style={{ height: "5rem", overflow: "hidden" }}>
                                            {mov.overview.substring(0, 70)}...
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href={`/movie/${mov.id}`} className="btn btn-dark rounded-0">Go to Film Page</a>
                                        </div>
                                    </div>
                                </div>
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