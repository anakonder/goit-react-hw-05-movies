import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';

const HomePage = lazy(() => import("../pages/HomePage"))
const MoviePage = lazy(() => import("../pages/MoviesPage"))
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"))
const Layout = lazy(() => import("./Layout/Layout"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))



const App = () => {

  return (      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<HomePage/>} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="movies" element={<MoviePage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Route>
      </Routes>   
  );
};

export default App;