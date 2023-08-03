import { Link } from "react-router-dom";
import { useState } from "react";
import { getMovies } from "services/API";


const MoviePage = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([])
    

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await getMovies("", query); 
      setMovies(result); 
      setQuery("")
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
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title || movie.name} - {movie.id}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
      
        </div>)
}        
        
                
  
  


export default MoviePage;