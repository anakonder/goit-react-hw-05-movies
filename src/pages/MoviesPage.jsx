import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "services/API";
import { Oval } from  'react-loader-spinner'


const MoviePage = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await getMovies("", query); 
      setMovies(result); 
      setQuery("")
      navigate(`/movies?query=${query}`);
      setIsLoading(false) 
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {movies.length > 0 && (
                <div>
                    {!isLoading ?
                    (<ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <Link to={`${location.pathname}/${movie.id}`}>
                                    {movie.title || movie.name} 
                                </Link>
                            </li>
                        ))}
                    </ul>) : (
                      <Oval
                        height={20}
                        width={20}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                    )
                    }
                    
                </div>
            )}
      
        </div>)
}   

export default MoviePage;