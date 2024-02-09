import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import MovieCard from "../Card";
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
                        <MovieCard
                            movie={mov}
                            onAddMovie={handelAddMovie}
                            isMovieAdded={true}
                            key={mov.id}
                            animation="ball"
                        />

                    )
                }
                )}
            </div>

        </div>
    )
}

export default FavPage