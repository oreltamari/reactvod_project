import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./movieInfo.css";

export default function MovieInfo() {
  const params = useParams();
  const nav = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = `https://www.omdbapi.com/?i=${params.id}&apikey=90781f94`;
    const resp = await fetch(url);
    const data = await resp.json();
    setMovie(data);
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container p-2 text-center container-movieInfo">
      <div className="poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          className="col-md-3 box-movie"
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <div>
          {" "}
          <span>Runtime:</span> {movie.Runtime}
        </div>
        <div>
          {" "}
          <span>Rating:</span> {movie.imdbRating}
        </div>
        <div>
          {" "}
          <span>Genre:</span> {movie.Genre}
        </div>
        <div>
          {" "}
          <span>Plot:</span> {movie.Plot}
        </div>
        <button className="btn btn-dark mt-3 btn-go-back" onClick={() => nav(-1)}>
          Back To List
        </button>
      </div>
    </div>
  );
}
