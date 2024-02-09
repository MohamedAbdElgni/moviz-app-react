import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onAddMovie, isMovieAdded, animation }) => {
    return (
        <div className={`card m-2 rounded-0 ${animation}`} style={{ width: "18rem", height: "30rem", overflow: "hidden" }
        }>
            <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} className="card-img-top" alt="movie img" style={{ height: "15rem" }} />
            <div className="card-body">
                <h5 className="card-title" style={{ height: "3rem", overflow: "hidden" }}>
                    {movie.title}
                    <FontAwesomeIcon
                        icon={faStar}
                        onClick={() => onAddMovie(movie)}
                        style={{ color: isMovieAdded ? "gold" : "black" }}
                    />
                </h5>
                <p className="card-text" style={{ height: "5rem", overflow: "hidden" }}>
                    {movie.overview.substring(0, 70)}...
                </p>
                <div className="d-flex justify-content-center">
                    <Link to={`/movie/${movie.id}`} className="btn btn-dark rounded-0">Go to Film Page</Link>
                </div>
            </div>
        </div >
    );
}

export default MovieCard;
