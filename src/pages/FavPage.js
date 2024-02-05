
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FavPage() {

    const movieList = useSelector(state => state.movieList);
    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();


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
        }
    };




    return (


        <div className="container-fluid p-0 pt-3  bg-light">
            <h1 className='text-center pt-5 mb-3'>
                {counter > 0 ? `You have ${counter} movies in your list` : "Your list is empty"}
            </h1>
            <div className="ps-3">
            </div>
            <div className="main d-flex flex-wrap justify-content-center">

                {movieList.map((mov) => {
                    return (


                        <div className="card m-2 rounded-0 ball" style={{ width: "18rem", height: "30rem", overflow: "hidden" }} key={mov.id}>
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

        </div>
    )
}

export default FavPage