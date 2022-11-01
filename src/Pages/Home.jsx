// import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingsApi } from 'components/Api';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrandingsApi().then(setTrendingMovies);
  }, []);

  return (
    <section>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(({ id, original_title }) => (
          <li key={id}>
            <Link key={id} to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
