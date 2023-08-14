import { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { getMovies } from "../services/API"
import { Oval } from  'react-loader-spinner'


const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchMovies = async () => {
      const base = "3/trending/all/day"
      const result = await getMovies(base, "")    
      if (result) {
        setMovies(result); 
        setIsLoading(false)        
      }
    }

    fetchMovies()
    
  }, [])

  return (
    <div>
      {!isLoading ?
        (
          <MoviesList movies={movies} />
        ) : (
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
    )
    
}


export default HomePage;
