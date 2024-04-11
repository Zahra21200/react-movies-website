import React, { useEffect, useState } from "react";
import Title from "../Components/title";
import axios from "axios";
import Card from "../Components/card";

function Home() {
    const [movies, setMovies] = useState([]);
    const [movieName, setmovieName] = useState("");
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const apiKey = "1c61f7854caf371b34a23ef611f0efed";

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then((res) => {
                setMovies(res.data.results);
                //console.log(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSearchChange = (e) => {
        setmovieName(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (movieName.trim() !== "") {
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
                .then((res) => {
                    setMovies(res.data.results);
                    console.log(res.data.results);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={movieName}
                    onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
            <Title title="My Movies" Shadow="0" color="red" fontSize="20" />

            <div className="container">
                <div className="row">
                    {movies.map((movie) => {
                        return (
                            <div className="col-md-3" key={movie.id}>
                                <Card
                                    title={movie.title}
                                    popularity={movie.popularity}
                                    imagesrc={posterBaseUrl + movie.poster_path}
                                    voteAverage={movie.vote_average.toFixed(1)}
                                    movieId={movie.id}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
