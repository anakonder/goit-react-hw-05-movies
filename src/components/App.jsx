import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
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
          <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
        </Route>

        <Route path="movies" element={<MoviePage/>}/>
        </Route>
      </Routes>   
  );
};

export default App;