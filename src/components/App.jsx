import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from 'react';
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const MoviePage = lazy(() => import("../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))



const App = () => {

  return (      
      <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index element={<HomePage />} />
           <Route path="movies" element={<MoviePage/>}/>
           <Route path="movies/:movieId" element={<MovieDetailsPage />}>
             <Route path="cast" element={<Cast/>} />
             <Route path="reviews" element={<Reviews/>} />
           </Route>
           <Route path="*" element={<Navigate to="/" />} />
         </Route>         
      </Routes>   
  );
};

export default App;