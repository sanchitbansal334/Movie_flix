import React, { useEffect, useState } from "react";
import "./Hero.css";
import axios from "./axios";
import requests from "./requests";

function Hero() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTopRated);
      const movie = request.data.results[3];
      setMovie(movie);
    }
    fetchMovie();
  }, []);

  return (
    <div className="hero">
      <h1 className="hero__title">Movie of the day</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie.title}
        className="movie__poster"
      />
      <div className="movie__details">
        <ul>
          <li>Title : {movie?.title}</li>
          <li>IMDb : {movie?.vote_average}</li>
        </ul>
        <ul>
          <li>Year : {movie.release_date?.substring(0, 4)}</li>
          <li>Popularity : {movie?.popularity}</li>
        </ul>
        <ul>
          <li>
            {movie?.original_language === "en"
              ? "English"
              : movie.original_language}
          </li>
          <li>Action</li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
