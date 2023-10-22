import { useState } from "react";
import withResults from "../mocks/with-results.json";
import withNoResults from "../mocks/no-results.json";

export default function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovies(json);
        });
    } else setResponseMovies(withNoResults);
  };

  return { movies: mappedMovies, getMovies };
}
