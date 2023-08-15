import {  useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { getMovies } from "services/API";
import { Oval } from "react-loader-spinner";

const MoviePage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  
  useEffect(() => {
    const queryFromUrl = searchParams.get("query");
    if (queryFromUrl) {
      setQuery(queryFromUrl);
      fetchMovies(queryFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]); 

  const fetchMovies = async (searchQuery) => {
    try {
      const result = await getMovies("", searchQuery);
      setMovies(result);
      setSearchParams({ query: searchQuery });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies(query);
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
                    (

              <MoviesList movies={movies} isHomePage={false} />

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
            )}
      
        </div>
  );
};

export default MoviePage;
