import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "99ab5d6e9b6455c2c2cd1436ded12d57";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },

})

export const getMovies = async (query) => {
  try {
    console.log("Параметри які потрібні для запита", query)
    const response = await api.get(`trending/all/day`);
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return null;
  }
};


export default api;


    //  --url 'https://api.themoviedb.org/3/movie/11?api_key=99ab5d6e9b6455c2c2cd1436ded12d57'