import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/"
const API_KEY = "99ab5d6e9b6455c2c2cd1436ded12d57";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY      
  },

})

export const getMovies = async (base, query, movieId, flag) => {
    try {
        if(query) {           
            const response = await api.get(`3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
            return response.data.results
        }
        if(base) {            
            const response = await api.get(base);           
            return response.data.results
        }
        if(movieId && !flag) {
            const response = await api.get(`3/movie/${movieId}`)
            
            return {
                movieData: response.data,                
            };
        }
        if (movieId && flag) {
            console.log(movieId, flag, "передано для запиту");
            const response = await api.get(`3/movie/${movieId}/${flag}`)
            console.log(response, "відповідь на запит");
            return response
        }

    } catch (error) {
        console.log("Error fetching Moves",error)
        return null
    } 
}

