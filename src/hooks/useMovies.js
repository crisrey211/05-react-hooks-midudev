import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export default function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, error, loading };
}
