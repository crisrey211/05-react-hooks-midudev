import "./App.css";
import { useEffect, useRef, useState } from "react";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";

function App() {

  const { movies } = useMovies()
  const [query, setQuery] = useState("")
  const [error, setError] = useState(null)
  const counter = useRef(0) //valor que persiste entre renders

  counter.current++

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una pelicula vacia.")
      return
    }

    if (query.length < 3) {
      setError("La película debe de tener al menos 3 carácteres.")
      return
    }

    setError(null)
  }, [query])


  const handleSubmit = (ev) => {
    ev.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(ev.target)
    )
  }

  const handleChange = (ev) => {
    setQuery(ev.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} name="query" placeholder="Avengers, Star wars, The Matix..." />
          <button type="submit" >Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
