import React from "react";

const MovieSpecial = ({ movie, filmShow }) => {
  return (
    <div className="movie-special">
      <h2 onClick={() => filmShow(false)} className="close">
        x
      </h2>

      <img src={movie.posterurl} alt="" />
      <div>
        <h1>{movie.name}</h1>
      </div>
    </div>
  );
};

export default MovieSpecial;
