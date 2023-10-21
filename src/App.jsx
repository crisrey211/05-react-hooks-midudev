import "./App.css";
import { useRef } from "react";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";

function App() {

  const { movies } = useMovies()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(ev.target)
    )
    console.log(query)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" placeholder="Avengers, Star wars, The Matix..." />
          <button type="submit" >Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
