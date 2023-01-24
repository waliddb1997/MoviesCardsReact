import React from "react";
import MovieCard from "./MovieCard";
import movies from "./movies";

const MovieList = ({ search }) => {
  return (
    <div className="movies-list">
      {movies
        .filter((mov) =>
          mov.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((mov) => (
          <MovieCard movie={mov} />
        ))}
    </div>
  );
};

export default MovieList;
