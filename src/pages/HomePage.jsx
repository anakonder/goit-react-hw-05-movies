import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../services/API"

const HomePage = () => {
    const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const fetchMovies = async () => {
      const base = "3/trending/all/day"
      const result = await getMovies(base, "")    
      if (result) {
        setMovies(result); 
      }
    }

    fetchMovies()
    
  }, [])

  return (
    <div>
      <ul>
          {movies.map(movie => {
            return (   
              <li key={movie.id}>
                <Link  to={`/movies/${movie.id}`}>{movie.title || movie.name} - {movie.id}</Link> 
              </li>
              )
          })}
      </ul>
      
    </div>
    )
    
}


export default HomePage;