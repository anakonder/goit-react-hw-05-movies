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
                setReviews(result.data.results);
            }            
        }
        
        fetchReviews()
    }, [movieId])
    return (
        <div>
            <ul>
                {reviews &&
                    reviews.map(review => 
                        <li>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                )    
                }
            </ul>
        </div>
)
}