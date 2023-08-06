import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../services/API"

export const Cast = () => {
    const [cast, setCast] = useState([])
    
    const { movieId } = useParams()
    
    useEffect(() => {
        const fetchCast = async () => {
            const flag = "credits"
            const result = await getMovies("", "", movieId, flag)
            if (result && result.data && result.data.cast) {
                setCast(result.data.cast);
            }
            
        }
        
        fetchCast()
    }, [movieId])
    
    return (
     <div>
            <h2>Cast:</h2>
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        <img                        
                            src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                            alt="actor icon"
                            object-fit= "cover"
                            width="50"
                            height="70"
                            

                        />
                        <p>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </div>
)
}