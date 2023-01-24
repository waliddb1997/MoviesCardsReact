import React, { useState } from "react";
import MovieSpecial from "./MovieSpecial";

const MovieCard = ({ movie }) => {
  const [show, setshow] = useState(false);
  return (
    <div onClick={() => setshow(!show)} className="Movie-Card">
      <img src={movie.posterurl} alt="" />
      <h1>{movie.name}</h1>
      <h4>{movie.description}</h4>
      <h3>{movie.rating}</h3>
      {show ? <MovieSpecial movie={movie} filmShow={movie} /> : null}
    </div>
  );
};

export default MovieCard;
