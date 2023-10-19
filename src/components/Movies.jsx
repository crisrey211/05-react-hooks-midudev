/* import React from 'react';
import withoutResults from "../mocks/no-results.json"; */

const ListOfMovies = ({ movies }) => {
    return (
        <ul>
            {movies.map((item) => (
                <li key={item.imdbID}>
                    <h3>{item.Title} </h3>
                    <p>{item.Year}</p>
                    <img src={item.Poster} />
                </li>
            ))}
        </ul>)
}

const NoMoviesResult = () => {

    return <p>No se encontraron películas</p>
}


export default function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
}
