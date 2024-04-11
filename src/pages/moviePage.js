import React, { useEffect ,useState} from "react";
import './style.css';
import { useRouteMatch,useParams } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

function MoviePage() {
    const [movieDetails, setMovieDetails] = useState(null);
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const { movieId } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1c61f7854caf371b34a23ef611f0efed`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log(err));
    }, [movieId]);

    let genres = "";
    let languages = "";
    if (movieDetails) {
        genres = movieDetails.genres.map(genre => genre.name).join(", ");
        languages = movieDetails.spoken_languages.map(lang => lang.name).join(", ");
    }

    return (
        <div className="movie-page">
            {movieDetails && (
                <>
                    <div className="movie-image">
                        <img src={posterBaseUrl + movieDetails.poster_path} alt={movieDetails.title} />
                    </div>
                    <div className="movie-details">
                        <h1>{movieDetails.original_title}</h1>
                        <p>{movieDetails.overview}</p>
                        <p>Release Date: {movieDetails.release_date}</p>
                        <p>Rating: {movieDetails.vote_average}</p>
                        <p>Genres: {genres}</p>
                        <p>Spoken Languages: {languages}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviePage;
