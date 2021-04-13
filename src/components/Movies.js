import React, { useState } from "react";
const imageUrl = "https://image.tmdb.org/t/p/w500";

function Movies({ title, overview, movieimage, release, votes }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="movies_container">
        <img
          onClick={handleClick}
          src={imageUrl + movieimage}
          alt="movie display"
        />

        <div className="movie-body">
          <div className="movie-info">
            <h3>{title}</h3>
            <p className="votes">{votes}</p>
          </div>
          <div className={click ? "details" : "no-details"}>
            <p>{overview}</p>
            <p>Release Date:{release}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
//https://api.themoviedb.org/3/movie/464052/images?api_key=33db9b524348f91f781f6b2148824656&language=en-US
