import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/API"

const Reviews = () => {
    const [reviews, setReviews] = useState("")
    
    const { movieId } = useParams()
    
    useEffect(() => {
        const fetchReviews = async () => {
            const flag = "reviews"
            const result = await getMovies("", "", movieId, flag)            
            if (result && result.data && result.data.results.length) {
                setReviews(result.data.results);
            }            
        }
        
        fetchReviews()
    }, [movieId])
  
    return (
    <div>
      {reviews ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}


export default Reviews;