import { useState, useEffect, Suspense} from "react"
import { Link, Outlet, useParams, useLocation, } from "react-router-dom";
import { getMovies } from "../../services/API"
import MovieDetails from "components/MovieDetails/MovieDetails";
import Styles from "./MovieDetailsPage.module.css"




const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({})    
    const {movieId} = useParams()    
    const location = useLocation();      
    const backLink = location.state?.from ?? '/';
    const camefrom = location?.state?.from ?? '/';

    useEffect(() => {
        const fetchMovie = async () => {
            const {movieData} = await getMovies("", "", movieId)
            setMovie(movieData);            
        }
        
        fetchMovie()
        
    }, [movieId])
    
    const { title, poster_path, overview, vote_average, genres } = movie || {}
    const userScore = Math.round(vote_average * 10)
  
    return (
      <div>
        <div className={Styles.linkBtn }>
          <Link  to={backLink}>
                  Go Back
          </Link>
        </div>
        <div className={Styles.infoWrap}>
          {poster_path ? (
            <img
              className={Styles.poster}            
              src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
              alt="Movie backdrop"
              width="200"
              height="auto"
            />
            ) : (
            <img
              className={Styles.poster}            
              src={`https://th.bing.com/th/id/R.6486b7c738f4ee5dd3d0f74debbcf58b?rik=Ai9QxajK3PUhkg&pid=ImgRaw&r=0`}
              alt="Movie backdrop"
              width="200"
              height="auto"
            />              
            )}
          <div className={Styles.textWrap}>
            <h2 className={Styles.title}>{title}</h2>
            <p>user Score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={Styles.genresList}>
              {genres && genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <MovieDetails camefrom={camefrom} />        
        <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
        </Suspense>
      </div>
    );
}

export default MovieDetailsPage;


















