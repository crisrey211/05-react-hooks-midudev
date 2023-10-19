/* import React from 'react';
import withoutResults from "../mocks/no-results.json"; */

const ListOfMovies = ({ movies }) => {
    return (
        <ul>
            {movies.map((item) => (
                <li key={item.id}>
                    <h3>{item.title} </h3>
                    <p>{item.tear}</p>
                    <img src={item.poster} alt={item.title} />
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
