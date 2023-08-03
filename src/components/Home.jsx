import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../services/API"

const Home = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const fetchMovies = async () => {
      const query = ""
      const base = "3/trending/all/day"
      const result = await getMovies(base, query)
      console.log(result, "результат запиту на колекцію")
      if (result) {
        setMovies(result); // Зберігаємо дані про фільми у стейт
      }
    }

    fetchMovies()
    
  }, [])

  return (
    <div>
      <ul>
          {movies.map(movie => {
            return (   
              <li>
                <Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title || movie.name}{movie.id}</Link> 
              </li>
              )
          })}
      </ul>
      
    </div>
    )
    
}

export default Home