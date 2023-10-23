import debounce from "just-debounce-it";
import { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ""
      return
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia.")
      return
    }

    if (search.length < 3) {
      setError("La película debe de tener al menos 3 carácteres.")
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 500)
    , [getMovies]
  )

  const handleSubmit = (ev) => {
    ev.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (ev) => {
    const newSearch = ev.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }



  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name="query" placeholder="Avengers, Star wars, The Matix..." />
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button type="submit" >Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>cargando películas</p> :
          <Movies movies={movies} />
        }
      </main>
    </div>
  );
}

export default App;
