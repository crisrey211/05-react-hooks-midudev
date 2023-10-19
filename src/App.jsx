import { useState } from 'react'
import './App.css'
import responseMovies from "./mocks/with-results.json"
import withoutResults from "./mocks/no-results.json"

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  console.log(hasMovies)

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star wars, The Matix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>
    </div>
  )
}

export default App
