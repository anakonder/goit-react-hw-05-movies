import { Routes, Route, NavLink } from "react-router-dom";
import {  useEffect } from "react";
import HomePage from "../pages/HomePage"
import MoviePage from "pages/MoviesPage";

import {getMovies} from "../services/API"
const App = () => {

  useEffect(() => {
    const query = ""
    const base = "3/trending/all/day"
    getMovies(base, query)
  }, [])
  
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" >Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div><HomePage/></div>}/>
        <Route path="/movies" element={<div><MoviePage/></div>}/>
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}/>
      </Routes>
    </div>
  );
};

export default App;