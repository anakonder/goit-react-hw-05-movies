import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage"
import MoviePage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";


const App = () => {

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
        <Route index element={<div><HomePage /></div>} />
        <Route path="/movies" element={<div><MoviePage/></div>}/>
        <Route path="/movies/:movieId" element={<div><MovieDetailsPage/></div>}/>
      </Routes>
    </div>
  );
};

export default App;