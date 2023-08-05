import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../services/API"

export const Reviews = () => {
    const [reviews, setReviews] = useState("")
    
    const { movieId } = useParams()
    
    useEffect(() => {
        const fetchReviews = async () => {
            const flag = "reviews"
            const result = await getMovies("", "", movieId, flag)
            console.log(result, "перевірка результату запиту на reviews"); // Потрібно видалити 
            if (result && result.data && result.data.results.length) {
                setReviews(result.data.results[0].content);
            }            
        }
        
        fetchReviews()
    }, [movieId])
    return (
        <div>{reviews}</div>
)
}