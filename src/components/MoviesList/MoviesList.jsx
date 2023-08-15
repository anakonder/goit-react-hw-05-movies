import { Link, useLocation } from "react-router-dom"


const MoviesList = ({movies, isHomePage}) => {
    const location = useLocation()
    console.log(movies)

    return (
    <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`${isHomePage ? "movies/" : ""}${movie.id}`} state={{ from: location }}>
                    {movie.title || movie.name}
                </Link>
            </li>
            )
        )}
    </ul>
    )
}

export default MoviesList;