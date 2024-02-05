import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const dispatch = useDispatch();
    const [movis, setMovs] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = 300;
    const movieList = useSelector(state => state.movieList);

    const handelIncCounter = () => {
        dispatch({
            type: "INC_COUNTER",
        });
    };

    const handelDecCounter = () => {
        dispatch({
            type: "DEC_COUNTER",
        });
    };

    const handelAddMovie = (mov) => {

        if (movieList.some((movie) => movie.id === mov.id)) {

            dispatch({
                type: "REMOVE_MOVIE",
                payload: mov,
            });
            handelDecCounter();
        } else {
            dispatch({
                type: "ADD_MOVIE",
                payload: mov,
            });
            handelIncCounter();
        }


    };


    useEffect(() => {
        const apiKey = "f70cf3e46e9ae3664a9c8aae2c4ec8ac";
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

        axios
            .get(apiUrl)
            .then((res) => setMovs(res.data.results))
            .catch((err) => console.error(err));
    }, [page]);


    const handelNext = () => {
        setPage(page + 1);
    };

    const handelPrev = () => {
        setPage(page - 1);
    };


    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        for (
            let i = Math.max(1, page - Math.floor(maxVisiblePages / 2));
            i <= Math.min(totalPages, page + Math.floor(maxVisiblePages / 2));
            i++
        ) {
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
        <div className="container-fluid p-0 pt-3  bg-light">
            <div className="ps-3">
            </div>
            <div className="main d-flex flex-wrap justify-content-center">

                {movis.map((mov) => {
                    return (


                        <div className="card m-2 rounded-0 slide-in-fwd-center" style={{ width: "18rem", height: "30rem", overflow: "hidden" }} key={mov.id}>
                            <img src={`https://image.tmdb.org/t/p/w400${mov.poster_path}`} className="card-img-top" alt="movie img" style={{ height: "15rem" }} />
                            <div className="card-body">
                                <h5 className="card-title  " style={{ height: "3rem", overflow: "hidden" }}>
                                    {mov.title}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        onClick={() => handelAddMovie(mov)}
                                        style={{ color: movieList.some((movie) => movie.id === mov.id) ? "gold" : "black" }}
                                    />
                                </h5>

                                <p className="card-text" style={{ height: "5rem", overflow: "hidden" }}>
                                    {mov.overview.substring(0, 70)}...
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/movie/${mov.id}`} className="btn btn-dark rounded-0">Go to Film Page</Link>
                                </div>
                            </div>
                        </div>


                    )
                }
                )}
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm "
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

    )
}

export default Home