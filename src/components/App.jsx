import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import MoviePage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import { Layout } from "./Layout";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";



const App = () => {

  return (      
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>

        <Route path="movies" element={<MoviePage/>}/>
        </Route>
      </Routes>   
  );
};

export default App;