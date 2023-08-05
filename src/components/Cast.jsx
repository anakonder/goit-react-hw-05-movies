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
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>
        </div>
)
}