import { Link } from "react-router-dom"
import styles from "./MovieDetails.module.css"

const MovieDetails = ({camefrom}) => {
    return (
        <div className={styles.detailsWrap}>
            <p>Additional information</p>
            <ul className={styles.detailsLinks}>
                <li>
                  <Link to={"cast"} state={{from: camefrom}}>Cast</Link>
                </li>
                <li>
                  <Link to={"reviews"} state={{from: camefrom}}>Reviews</Link>
                </li>
            </ul>            
        </div>
    )
}


export default MovieDetails;