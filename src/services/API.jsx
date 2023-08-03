import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/"
const API_KEY = "99ab5d6e9b6455c2c2cd1436ded12d57";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY      
  },

})

export const getMovies = async (base, query) => {
    try {
        if(query) {
            // console.log("Пішов запит за словом", query)
            const response = await api.get(`3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
            // console.log(response.data)
            // console.log(response)
            return response.data.results
        }
        if(base) {
            // console.log("Пішов запит на колекцію популярних фільмів")
            const response = await api.get(base);
            // console.log(response.data)
            // console.log(response)
            return response.data.results
        }

    } catch (error) {
        console.log("Error fetching Moves",error)
        return null
    } 
}