import { useState } from "react";
import { getMovies } from "services/API";

const Movie = () => {
  const [query, setQuery] = useState("");
  const base = "";

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(base, query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Movie;
