import { useState, useEffect} from "react"
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovies } from "../services/API"
import Styles from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({})
    // const [movieImages, setMovieImages] = useState({});
    const {movieId} = useParams()    

    useEffect(() => {
        const fetchMovie = async () => {
            const {movieData} = await getMovies("", "", movieId)
            setMovie(movieData);
            // setMovieImages(movieImages);
        }
        
        fetchMovie()
        
    }, [movieId])
    
    const { title, poster_path, overview, vote_average, genres } = movie || {}
    const userScore = Math.round(vote_average * 10)
    console.log(movie)

    return (
      <div>
        <div className={Styles.infoWrap}>
          {poster_path &&  (
            <img
              className={Styles.poster}            
              src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
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
        <div className={Styles.detailsWrap}>
            <p>Additional information</p>
            <ul className={Styles.detailsLinks}>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
            </ul>
        </div>
        <Outlet/>
      </div>
    );
}

export default MovieDetailsPage;