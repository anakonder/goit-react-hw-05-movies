import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/API"

const Cast = () => {
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
        {cast ? (
            <div>
                <p>Cast:</p>
                <ul>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            {actor.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                                    alt="actor icon"
                                    style={{
                                        width: "50px",
                                        height: "70px",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                <img
                                    src={`https://3.bp.blogspot.com/_uPjaUtd_i5Y/SxBf1Vc7EWI/AAAAAAAAAI8/fa4SF8JGWaw/s1600/mr-x-238x300.png`}
                                    alt="actor icon"
                                    style={{
                                        width: "50px",
                                        height: "70px",
                                    }}
                                />
                            )}
                            <p>{actor.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>wwwweqweee</p>
        )}
    </div>
);
}

export default Cast;