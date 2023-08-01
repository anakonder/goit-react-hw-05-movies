import { useEffect, useState } from "react";
import { getMovies } from "Api/Api";

export const App = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {    
    const fetchMovies = async () => {
      const result = await getMovies(query);
      console.log(result);
      // Тут ви можете встановити стан з результатами отриманих фільмів, якщо потрібно
    };

    if (true) {
      fetchMovies();
    }
  }, []);
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};

const Movies = () => {

}

const MovieDetails = () => {

}

const Cast = () => {
  
}
