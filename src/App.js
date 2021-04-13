import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import TrendingMovies from "./components/TrendingMovies";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=33db9b524348f91f781f6b2148824656&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=33db9b524348f91f781f6b2148824656"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrendingMovies(data.results);
      });
  }, []);

  const handleInput = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem === "") {
      alert("no search");
    } else {
      const userSearch = searchItem;
      // console.log(userSearch);

      fetch(
        `https://api.themoviedb.org/3/search/movie?&api_key=33db9b524348f91f781f6b2148824656&query=${userSearch}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });

      setSearchItem("");
      setClick(!click);
    }
  };

  return (
    <div className="App">
      <form className="search-form">
        <input
          type="text"
          value={searchItem}
          onChange={handleInput}
          placeholder="search..."
          className="input-field"
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <div className="movies">
        {movies.map((movie) => {
          return (
            <>
              <Movies
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                movieimage={movie.poster_path}
                release={movie.release_date}
                votes={movie.vote_average}
                value={movies}
              />
            </>
          );
        })}
      </div>
      <h2>Trending Movies</h2>
      <div className="trendingMovies">
        {trendingMovies.map((trending) => {
          return (
            <TrendingMovies
              key={trending.id}
              title={trending.title}
              movieimage={trending.poster_path}
              value={trendingMovies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
//
