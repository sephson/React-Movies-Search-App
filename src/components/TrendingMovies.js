import React from "react";

const imageUrl = "https://image.tmdb.org/t/p/w500";

function TrendingMovies({ title, movieimage }) {
  return (
    <div className="trending_container">
      <img src={imageUrl + movieimage} alt="movie display" />
      <h2>{title}</h2>
    </div>
  );
}

export default TrendingMovies;
