const ListOfMovies = ({ movies }) => {
    return (
        <ul className="movies">
            {movies.map((item) => (
                <li key={item.id} className="movie">
                    <h3>{item.title} </h3>
                    <p>{item.year}</p>
                    <img src={item.image} alt={item.title} />
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
