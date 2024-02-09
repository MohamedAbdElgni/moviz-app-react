import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../Card";
import { ADD_MOVIE, REMOVE_MOVIE } from "../Store/Actions/MovieAction";



function Home() {
    const dispatch = useDispatch();
    const [movis, setMovs] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = 300;
    const movieList = useSelector(state => state.combinmovie.movieList);
    const lang = useSelector(state => state.combinlang.lang);


    const handelAddMovie = (mov) => {
        console.log(mov.id);
        console.log(movieList);
        if (movieList.some((movie) => movie.id === mov.id)) {
            dispatch(REMOVE_MOVIE(mov));

        } else {
            dispatch(ADD_MOVIE(mov));

        }
    }

    useEffect(() => {


    }, [movieList]);





    useEffect(() => {
        const apiKey = "f70cf3e46e9ae3664a9c8aae2c4ec8ac";
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}&language=${lang}`;

        axios.get(apiUrl)
            .then((res) => setMovs(res.data.results))
            .catch((err) => console.error(err));
    }, [page, lang]);

    const handelNext = () => {
        setPage(page + 1);
    };

    const handelPrev = () => {
        setPage(page - 1);
    };


    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        for (let i = Math.max(1, page - Math.floor(maxVisiblePages / 2)); i <= Math.min(totalPages, page + Math.floor(maxVisiblePages / 2)); i++) {
            pageNumbers.push(
                <button
                    key={i}
                    type="button"
                    className={`btn btn-secondary ${i === page ? "active" : ""}`}
                    onClick={() => setPage(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="container-fluid p-0 pt-3 bg-light">
            <div className="ps-3"></div>
            <div className="main d-flex flex-wrap justify-content-center">
                {movis.map((mov) => (
                    <MovieCard
                        key={mov.id}
                        movie={mov}
                        onAddMovie={handelAddMovie}
                        isMovieAdded={movieList.some((movie) => movie.id === mov.id)}
                        animation="slide-in-fwd-center"
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={handelPrev}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    {generatePageNumbers()}
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm bg-primary"
                        onClick={handelNext}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
