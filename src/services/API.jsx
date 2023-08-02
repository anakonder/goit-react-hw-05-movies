import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/"
const API_KEY = "99ab5d6e9b6455c2c2cd1436ded12d57";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      perPage: 20
  },

})

export const getMoves = async (base, query) => {
    try {
        if(query) {
            console.log("Пішов запит за словом")
        }

    } catch (error) {
        console.log("Error fetching Moves",error)
        return null
    } 
}